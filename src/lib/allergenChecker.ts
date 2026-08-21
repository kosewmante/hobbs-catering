import { MenuItem, Student } from '../types/hobbs';

export interface DietaryConflict {
  hasConflict: boolean;
  reasons: string[];
  severity: 'high' | 'medium' | 'none';
}

/**
  Normalizes allergen names for robust matching e.g. "Wheat" vs "Cereals (Wheat/Gluten)"
 */
function normalizeAllergen(alg: string): string {
  const lower = alg.toLowerCase();
  if (lower.includes('wheat') || lower.includes('gluten') || lower.includes('cereal')) return 'wheat';
  if (lower.includes('milk') || lower.includes('dairy') || lower.includes('lactose')) return 'milk';
  if (lower.includes('egg')) return 'egg';
  if (lower.includes('fish')) return 'fish';
  if (lower.includes('soya') || lower.includes('soy')) return 'soya';
  if (lower.includes('mustard')) return 'mustard';
  if (lower.includes('sesame')) return 'sesame';
  if (lower.includes('celery')) return 'celery';
  if (lower.includes('lupin')) return 'lupin';
  if (lower.includes('sulphite') || lower.includes('sulfite')) return 'sulphites';
  if (lower.includes('peanut')) return 'peanuts';
  if (lower.includes('pork') || lower.includes('ham') || lower.includes('gammon')) return 'pork';
  return lower;
}

export function checkDietaryConflict(item: MenuItem, student?: Student | null): DietaryConflict {
  if (!student) {
    return { hasConflict: false, reasons: [], severity: 'none' };
  }

  const reasons: string[] = [];

  // 1. Halal check
  if (student.is_halal) {
    if (item.contains_pork || !item.is_halal_suitable) {
      reasons.push(`Contains Pork (Non-Halal for ${student.name})`);
    }
  }

  // 2. Student Allergen Checklist comparison
  if (student.allergens && student.allergens.length > 0) {
    const studentRestrictedNormalized = student.allergens.map(normalizeAllergen);

    // Check direct item allergens
    item.allergens.forEach((itemAlg) => {
      const normItemAlg = normalizeAllergen(itemAlg);
      if (studentRestrictedNormalized.includes(normItemAlg)) {
        reasons.push(`Contains ${itemAlg} (${student.name} allergen)`);
      }
    });

    // Check Pork if student selected Pork as an allergen restriction
    if (studentRestrictedNormalized.includes('pork') && item.contains_pork) {
      if (!reasons.some(r => r.includes('Pork'))) {
        reasons.push(`Contains Pork (${student.name} dietary restriction)`);
      }
    }

    // Check "May contain" trace warnings
    item.may_contain.forEach((mayAlg) => {
      const normMayAlg = normalizeAllergen(mayAlg);
      if (studentRestrictedNormalized.includes(normMayAlg)) {
        reasons.push(`May contain traces of ${mayAlg}`);
      }
    });
  }

  const hasConflict = reasons.length > 0;
  const severity = reasons.some(r => r.startsWith('Contains')) ? 'high' : (hasConflict ? 'medium' : 'none');

  return {
    hasConflict,
    reasons,
    severity
  };
}
