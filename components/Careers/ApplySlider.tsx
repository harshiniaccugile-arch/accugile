'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Paperclip, Check } from 'lucide-react';

interface ApplySliderProps {
  isOpen: boolean;
  onClose: () => void;
  roleTitle: string;
}

export default function ApplySlider({ isOpen, onClose, roleTitle }: ApplySliderProps) {
  const [resumeName, setResumeName] = useState<string>('');
  const [coverName, setCoverName] = useState<string>('');
  const [consent, setConsent] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const resumeInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal slider is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      alert('Please accept the Online Application Consent before submitting.');
      return;
    }
    if (!captchaChecked) {
      alert('Please check the reCAPTCHA verification.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        backgroundColor: '#FFFFFF',
        overflowY: 'auto',
        animation: 'slideUpModal 0.32s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}
    >
      {/* Top bar with centered label and top-right close icon */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '24px 24px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#64748B',
          }}
        >
          APPLY ONLINE
        </div>

        <button
          onClick={onClose}
          type="button"
          aria-label="Close form"
          style={{
            position: 'absolute',
            right: '24px',
            top: '20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#64748B',
            padding: '6px',
            transition: 'color 0.15s ease',
          }}
        >
          <X size={22} strokeWidth={1.5} />
          <span style={{ fontSize: '10px', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Esc</span>
        </button>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '24px 24px 80px' }}>
        {/* Job Title Heading with teal underline bar */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h1
            style={{
              fontSize: 'clamp(26px, 3.4vw, 36px)',
              fontWeight: 800,
              color: '#1E1B4B',
              margin: '0 auto 12px',
              display: 'inline-block',
              position: 'relative',
              paddingBottom: '8px',
            }}
          >
            {roleTitle}
            <span
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: '3px',
                backgroundColor: '#10B981',
                borderRadius: '2px',
              }}
            />
          </h1>
        </div>

        {submitted ? (
          <div
            style={{
              background: '#F0FDF4',
              border: '1px solid #BBF7D0',
              borderRadius: '16px',
              padding: '48px 32px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#10B981',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: '#FFFFFF',
              }}
            >
              <Check size={36} strokeWidth={2.5} />
            </div>
            <h3 style={{ fontSize: '24px', color: '#065F46', marginBottom: '12px', fontWeight: 700 }}>
              Application Submitted Successfully!
            </h3>
            <p style={{ color: '#047857', fontSize: '16px', maxWidth: '480px', margin: '0 auto 28px' }}>
              Thank you for applying for the <strong>{roleTitle}</strong> position. Our talent acquisition team will review your details and reach out.
            </p>
            <button
              onClick={onClose}
              type="button"
              className="btn btn-ac"
              style={{ padding: '12px 28px', fontSize: '15px' }}
            >
              Back to Careers
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Form Fields: 2 Columns with minimalist bottom-border styling */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                columnGap: '48px',
                rowGap: '36px',
                marginBottom: '40px',
              }}
            >
              {/* Full Name */}
              <div style={{ gridColumn: '1 / -1' }}>
                <input
                  type="text"
                  required
                  placeholder="Full Name (required)"
                  className="apply-input"
                />
              </div>

              {/* Your Email */}
              <div>
                <input
                  type="email"
                  required
                  placeholder="Your Email (required)"
                  className="apply-input"
                />
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  required
                  placeholder="Phone Number (required)"
                  className="apply-input"
                />
              </div>

              {/* Location */}
              <div>
                <input
                  type="text"
                  required
                  placeholder="Location (required)"
                  className="apply-input"
                />
              </div>

              {/* Current Organization */}
              <div>
                <input
                  type="text"
                  placeholder="Current Organization"
                  className="apply-input"
                />
              </div>

              {/* Current CTC */}
              <div>
                <input
                  type="text"
                  required
                  placeholder="Current CTC (required)"
                  className="apply-input"
                />
              </div>

              {/* Expected Salary */}
              <div>
                <input
                  type="text"
                  required
                  placeholder="Expected Salary (required)"
                  className="apply-input"
                />
              </div>

              {/* Years of Experience */}
              <div>
                <input
                  type="text"
                  required
                  placeholder="Years of Experience (required)"
                  className="apply-input"
                />
              </div>

              {/* Notice Period */}
              <div>
                <input
                  type="text"
                  placeholder="Notice Period"
                  className="apply-input"
                />
              </div>

              {/* LinkedIn URL */}
              <div style={{ gridColumn: '1 / -1' }}>
                <input
                  type="url"
                  placeholder="LinkedIn URL"
                  className="apply-input"
                />
              </div>

              {/* How did you hear about this opportunity? */}
              <div>
                <input
                  type="text"
                  placeholder="How did you hear about this opportunity?"
                  className="apply-input"
                />
              </div>

              {/* If you were referred, by who? */}
              <div>
                <input
                  type="text"
                  placeholder="If you were referred, by who?"
                  className="apply-input"
                />
              </div>
            </div>

            {/* Resume and Cover Letter Upload Buttons */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
                marginBottom: '36px',
              }}
            >
              {/* Attach Resume */}
              <div>
                <input
                  type="file"
                  ref={resumeInputRef}
                  accept=".doc,.docx,.pdf"
                  required
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setResumeName(e.target.files[0].name);
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => resumeInputRef.current?.click()}
                  className="file-btn"
                >
                  <Paperclip size={16} />
                  <span>
                    {resumeName ? resumeName : 'Attach Resume - .doc, .docx, .pdf (required)'}
                  </span>
                </button>
              </div>

              {/* Attach Cover Letter */}
              <div>
                <input
                  type="file"
                  ref={coverInputRef}
                  accept=".doc,.docx,.pdf"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setCoverName(e.target.files[0].name);
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => coverInputRef.current?.click()}
                  className="file-btn"
                >
                  <Paperclip size={16} />
                  <span>
                    {coverName ? coverName : 'Attach Cover Letter - .doc, .docx, .pdf'}
                  </span>
                </button>
              </div>
            </div>

            {/* Privacy Consent Checkbox Box */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '20px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                marginBottom: '40px',
              }}
            >
              <input
                type="checkbox"
                id="consentCheck"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                style={{
                  width: '20px',
                  height: '20px',
                  marginTop: '2px',
                  cursor: 'pointer',
                  accentColor: '#304DDB',
                }}
              />
              <label
                htmlFor="consentCheck"
                style={{
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: '#475569',
                  cursor: 'pointer',
                }}
              >
                I accept. Your privacy is really important to us. Selecting &ldquo;I accept&rdquo; confirms that you have read and accepted Accugile&apos;s{' '}
                <a
                  href="/legal?tab=privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0284C7', textDecoration: 'underline' }}
                >
                  Online Application Consent
                </a>
                . Your consent is a necessary prerequisite to submitting your application online.
              </label>
            </div>

            {/* reCAPTCHA Box + Yellow APPLY NOW Button */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '24px',
              }}
            >
              {/* Mock reCAPTCHA */}
              <div
                onClick={() => setCaptchaChecked(!captchaChecked)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '280px',
                  height: '74px',
                  background: '#F9FAFB',
                  border: '1px solid #D1D5DB',
                  borderRadius: '4px',
                  padding: '0 16px',
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <input
                    type="checkbox"
                    checked={captchaChecked}
                    onChange={() => {}}
                    style={{ width: '22px', height: '22px', cursor: 'pointer' }}
                  />
                  <span style={{ fontSize: '14px', color: '#374151', fontWeight: 500 }}>
                    I&apos;m not a robot
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                  </svg>
                  <span style={{ fontSize: '9px', color: '#6B7280' }}>reCAPTCHA</span>
                </div>
              </div>

              {/* Yellow APPLY NOW Button */}
              <button
                type="submit"
                style={{
                  backgroundColor: '#FACC15',
                  color: '#0F172A',
                  fontWeight: 800,
                  fontSize: '14px',
                  letterSpacing: '0.08em',
                  padding: '0 36px',
                  height: '74px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  transition: 'background-color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#EAB308')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FACC15')}
              >
                APPLY NOW
              </button>
            </div>

            {/* Disclaimer footer */}
            <p
              style={{
                textAlign: 'center',
                fontSize: '13px',
                color: '#64748B',
                margin: 0,
              }}
            >
              Candidates only! It is NOT OK for recruiters or others to solicit this company.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

