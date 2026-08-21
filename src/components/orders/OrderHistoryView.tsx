import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Clock, Copy, Check, ChevronDown, ChevronUp, Calendar, AlertCircle, Printer, CheckCircle2, Trash2 } from 'lucide-react';

export const OrderHistoryView: React.FC = () => {
  const { orders, loadingOrders, deleteOrder } = useCart();
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [deletingOrderId, setDeletingOrderId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedOrderId(prev => (prev === id ? null : id));
  };

  const copyRef = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  const handleDeleteOrder = async (orderId: string, refCode: string) => {
    if (window.confirm(`Are you sure you want to cancel and delete order ${refCode} completely?`)) {
      setDeletingOrderId(orderId);
      await deleteOrder(orderId);
      setDeletingOrderId(null);
    }
  };

  if (loadingOrders) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
        Loading order history...
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-subtle)',
            color: 'var(--brand-brown)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px auto'
          }}
        >
          <Clock size={32} />
        </div>
        <h2 style={{ fontSize: '18px', color: 'var(--brand-brown-dark)', marginBottom: '6px' }}>
          No Orders Placed Yet
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          When you pre-order lunches and generate BACS bank transfer references, your orders will appear here.
        </p>
      </div>
    );
  }

  const getCardStyle = (status: string): React.CSSProperties => ({
    borderLeft: status === 'pending_transfer' ? '4px solid var(--warning-red)' : '4px solid var(--success-green)',
    marginBottom: '16px'
  });

  const getBadgeStyle = (status: string): React.CSSProperties => ({
    backgroundColor: status === 'pending_transfer' ? '#fef3c7' : 'var(--success-bg)',
    color: status === 'pending_transfer' ? '#92400e' : '#047857'
  });

  return (
    <div style={{ padding: '16px 16px 100px 16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <div>
          <h2 style={{ fontSize: '20px', color: 'var(--brand-brown-dark)' }}>
            Order History & Receipts
          </h2>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            Review scheduled meals and BACS payment reference codes.
          </p>
        </div>
        <button
          onClick={handlePrintReceipt}
          style={{
            backgroundColor: 'var(--bg-subtle)',
            border: '1px solid var(--border-light)',
            color: 'var(--brand-brown-dark)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '12px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer'
          }}
          title="Print or Save PDF Receipt"
        >
          <Printer size={14} /> Print PDF
        </button>
      </div>

      {orders.map(order => {
        const isExpanded = expandedOrderId === order.id;
        const isDeleting = deletingOrderId === order.id;
        const formattedDate = new Date(order.created_at).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        return (
          <div
            key={order.id}
            className="card"
            style={getCardStyle(order.status)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <span
                    className="badge"
                    style={getBadgeStyle(order.status)}
                  >
                    {order.status === 'pending_transfer' ? 'PENDING BANK TRANSFER' : 'PAID / CONFIRMED'}
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={12} /> Placed on {formattedDate}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--brand-brown-dark)' }}>
                  £{order.total_amount.toFixed(2)}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{order.items.length} lunch(es)</div>
              </div>
            </div>

            {/* BACS Payment Progress Stepper */}
            <div
              style={{
                backgroundColor: 'var(--bg-page)',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 12px',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '11px',
                border: '1px solid var(--border-light)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#047857', fontWeight: '700' }}>
                <CheckCircle2 size={13} /> 1. Ref Generated
              </div>
              <div style={{ width: '20px', height: '1px', backgroundColor: 'var(--border-light)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: order.status === 'pending_transfer' ? '#d97706' : '#047857', fontWeight: '700' }}>
                <CheckCircle2 size={13} /> 2. Transfer Sent
              </div>
              <div style={{ width: '20px', height: '1px', backgroundColor: 'var(--border-light)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: order.status === 'confirmed' ? '#047857' : 'var(--text-muted)', fontWeight: '600' }}>
                <CheckCircle2 size={13} /> 3. Confirmed
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-page)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '10px'
              }}
            >
              <div>
                <div style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  BACS Reference Code
                </div>
                <div style={{ fontSize: '16px', fontWeight: '800', fontFamily: 'monospace', color: 'var(--brand-brown-dark)' }}>
                  {order.reference_code}
                </div>
              </div>
              <button
                onClick={() => copyRef(order.reference_code)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary-green-dark)',
                  fontSize: '12px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer'
                }}
              >
                {copiedCode === order.reference_code ? <Check size={14} color="var(--success-green)" /> : <Copy size={14} />}
                {copiedCode === order.reference_code ? 'Copied' : 'Copy'}
              </button>
            </div>

            {order.status === 'pending_transfer' && (
              <div
                style={{
                  fontSize: '12px',
                  color: '#92400e',
                  backgroundColor: '#fffbe0',
                  padding: '8px 10px',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <AlertCircle size={14} color="#d97706" />
                <span>Please transfer <strong>£{order.total_amount.toFixed(2)}</strong> to <strong>Hobbs Catering Ltd (Sort: 20-45-45, Acc: 83920147)</strong> with ref <strong>{order.reference_code}</strong>.</span>
              </div>
            )}

            <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid var(--border-light)', paddingTop: '8px' }}>
              <button
                onClick={() => toggleExpand(order.id)}
                style={{
                  flex: 1,
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary-green-dark)',
                  fontSize: '12px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  cursor: 'pointer'
                }}
              >
                {isExpanded ? 'Hide Breakdown' : 'Show Scheduled Meals'}
                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              <button
                onClick={() => handleDeleteOrder(order.id, order.reference_code)}
                disabled={isDeleting}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--danger-red)',
                  fontSize: '12px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer',
                  padding: '2px 8px'
                }}
                title="Delete this order completely"
              >
                <Trash2 size={14} />
                {isDeleting ? 'Deleting...' : 'Delete Order'}
              </button>
            </div>

            {isExpanded && (
              <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px dashed var(--border-light)' }}>
                {order.items.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '6px 0',
                      fontSize: '13px'
                    }}
                  >
                    <div>
                      <span style={{ fontWeight: '700', color: 'var(--brand-brown)' }}>{item.student_name}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '11px', marginLeft: '6px' }}>({item.date})</span>
                      <div style={{ color: 'var(--text-main)', fontSize: '12px' }}>{item.menu_item.name}</div>
                    </div>
                    <span style={{ fontWeight: '700' }}>£{item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
