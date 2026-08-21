import React, { useState } from 'react';
import { Order } from '../../types/hobbs';
import { Landmark, Copy, Check, ArrowRight } from 'lucide-react';

interface BacsCheckoutModalProps {
  isOpen: boolean;
  order: Order | null;
  onClose: () => void;
  onViewOrders: () => void;
}

const iconCircleStyle: React.CSSProperties = {
  width: '56px',
  height: '56px',
  borderRadius: '50%',
  backgroundColor: 'var(--primary-green-light)',
  color: 'var(--primary-green-dark)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 10px auto',
};

const refCardStyle: React.CSSProperties = {
  backgroundColor: '#fefce8',
  border: '2px dashed #fde047',
  borderRadius: 'var(--radius-md)',
  padding: '14px',
  textAlign: 'center',
  marginBottom: '16px',
};

const bankBoxStyle: React.CSSProperties = {
  backgroundColor: 'var(--bg-page)',
  border: '1px solid var(--border-light)',
  borderRadius: 'var(--radius-md)',
  padding: '16px',
  marginBottom: '18px',
};

export const BacsCheckoutModal: React.FC<BacsCheckoutModalProps> = ({
  isOpen,
  order,
  onClose,
  onViewOrders
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen || !order) return null;

  const bankDetails = {
    accountName: 'Hobbs Catering Ltd',
    sortCode: '20-45-45',
    accountNumber: '83920147',
    bankName: 'Barclays Bank UK'
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxHeight: '92vh' }}>
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <div style={iconCircleStyle}>
            <Landmark size={28} />
          </div>
          <span className="badge badge-green" style={{ marginBottom: '6px' }}>
            ORDER STATUS: PENDING BANK TRANSFER
          </span>
          <h2 style={{ fontSize: '20px', color: 'var(--brand-brown-dark)', marginTop: '4px' }}>
            BACS Payment Instructions
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Your school meal order has been saved. Please transfer <strong>£{order.total_amount.toFixed(2)}</strong> via online banking using the details below.
          </p>
        </div>

        <div style={refCardStyle}>
          <span style={{ fontSize: '11px', fontWeight: '800', color: '#854d0e', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            YOUR PAYMENT REFERENCE CODE (REQUIRED)
          </span>
          <div
            style={{
              fontSize: '24px',
              fontWeight: '800',
              color: 'var(--brand-brown-dark)',
              fontFamily: 'monospace',
              letterSpacing: '2px',
              margin: '6px 0'
            }}
          >
            {order.reference_code}
          </div>
          <button
            onClick={() => copyToClipboard(order.reference_code, 'Reference')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary-green-dark)',
              fontWeight: '700',
              fontSize: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer'
            }}
          >
            {copiedField === 'Reference' ? <Check size={14} color="var(--success-green)" /> : <Copy size={14} />}
            {copiedField === 'Reference' ? 'Copied to Clipboard!' : 'Copy Reference Code'}
          </button>
        </div>

        <div style={bankBoxStyle}>
          <h4 style={{ fontSize: '13px', color: 'var(--brand-brown)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Hobbs Business Account Details
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Account Name</div>
                <div style={{ fontSize: '14px', fontWeight: '700' }}>{bankDetails.accountName}</div>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.accountName, 'Account Name')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                {copiedField === 'Account Name' ? <Check size={16} color="var(--success-green)" /> : <Copy size={16} />}
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Sort Code</div>
                <div style={{ fontSize: '15px', fontWeight: '700', fontFamily: 'monospace' }}>{bankDetails.sortCode}</div>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.sortCode, 'Sort Code')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                {copiedField === 'Sort Code' ? <Check size={16} color="var(--success-green)" /> : <Copy size={16} />}
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Account Number</div>
                <div style={{ fontSize: '15px', fontWeight: '700', fontFamily: 'monospace' }}>{bankDetails.accountNumber}</div>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.accountNumber, 'Account Number')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                {copiedField === 'Account Number' ? <Check size={16} color="var(--success-green)" /> : <Copy size={16} />}
              </button>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', padding: '0 4px' }}>
          <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Meals Scheduled:</span>
          <span style={{ fontSize: '14px', fontWeight: '700' }}>{order.items.length} lunch(es)</span>
        </div>

        <button
          className="btn-primary"
          onClick={() => {
            onClose();
            onViewOrders();
          }}
        >
          View My Orders & History <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
