import React, { useState } from 'react';
import { Mail, Briefcase, Server, CalendarCheck, Check } from 'lucide-react';

const TOTAL_STEPS = 4;
const STEP_NAMES = ['Contact Info', 'Company Info', 'Use Case', 'Book Demo'];

export function DemoStepper() {
  const [curStep, setCurStep] = useState(0);
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    cloud: 'AWS',
  });

  const pct = Math.round(((curStep + 1) / TOTAL_STEPS) * 100);

  const goStep = (n: number) => {
    if (n < 0 || n >= TOTAL_STEPS) return;
    setCurStep(n);
    setError(null);
  };

  const nextStep = () => {
    if (curStep === 0 && (!formData.name || !formData.email)) {
      setError('Name and Email are required.');
      return;
    }
    if (curStep === 1 && !formData.company) {
      setError('Company name is required.');
      return;
    }
    if (curStep < TOTAL_STEPS - 1) {
      goStep(curStep + 1);
    } else {
      alert("Demo booked successfully! We'll be in touch soon.");
    }
  };

  const toggleCheck = (k: string) => {
    setChecks(prev => ({ ...prev, [k]: !prev[k] }));
  };

  return (
    <div className="demo-stepper-wrapper w-full max-w-[600px] text-left">
      <style>{`
        .demo-stepper-wrapper {
          --p: rgb(143,101,194);
          --p-dark: rgb(110, 74,158);
          --p-darker: rgb( 80, 48,120);
          --p-light: rgba(143,101,194, 0.1);
          --p-mid: rgba(143,101,194, 0.2);
          --p-glow: rgba(143,101,194,.18);
          --p-border: rgba(143,101,194,.30);
          --red: #D93025;
          --red-light: rgba(217,48,37, 0.1);
          --red-border: rgba(217,48,37,.25);
          --surface: rgba(20, 20, 25, 0.6);
          --surface2: rgba(30, 30, 35, 0.8);
          --border: rgba(255,255,255,0.1);
          --border-hover: rgba(143,101,194, 0.5);
          --t1: #FFFFFF;
          --t2: #E5E5E5;
          --t3: #A0A0A0;
          --t4: #707070;
          --r: 12px;
          --rs: 6px;
          --t: .18s cubic-bezier(.4,0,.2,1);
        }

        .ds-stepper-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--r);
          margin-bottom: 16px;
          overflow: hidden;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        .ds-stepper-header {
          background: linear-gradient(90deg, var(--p-darker) 0%, var(--p-dark) 100%);
          padding: 12px 20px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .ds-stepper-header-title {
          font-family: 'Inter', 'Google Sans', sans-serif;
          font-size: 14px; font-weight: 600; color: #fff;
        }
        .ds-stepper-header-sub { font-size: 11.5px; color: rgba(255,255,255,.7); }

        .ds-stepper {
          display: flex; align-items: flex-start;
          padding: 16px 20px 12px; overflow-x: auto;
        }
        .ds-step { display: flex; align-items: center; flex: 1; }
        .ds-step:last-child { flex: none; }
        .ds-step-inner {
          display: flex; flex-direction: column; align-items: center;
          cursor: pointer; gap: 6px; flex-shrink: 0;
          transition: opacity var(--t);
        }
        .ds-step-inner:hover .ds-step-circle { border-color: var(--p); }
        .ds-step-circle {
          width: 32px; height: 32px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 12.5px; font-weight: 600;
          border: 2px solid var(--border);
          background: rgba(0,0,0,0.3); color: var(--t4);
          transition: all var(--t); flex-shrink: 0;
        }
        .ds-step.done .ds-step-circle {
          background: var(--p); border-color: var(--p); color: #fff;
        }
        .ds-step.active .ds-step-circle {
          background: var(--p); border-color: var(--p); color: #fff;
          box-shadow: 0 0 0 4px var(--p-glow);
        }
        .ds-step-label {
          font-size: 10.5px; color: var(--t4);
          white-space: nowrap; font-weight: 500;
        }
        .ds-step.active .ds-step-label { color: #fff; font-weight: 600; }
        .ds-step.done .ds-step-label { color: var(--t3); }
        
        .ds-step-line {
          flex: 1; height: 2px;
          background: var(--border);
          margin: 0 6px; margin-bottom: 22px;
          border-radius: 2px; transition: background var(--t);
        }
        .ds-step.done .ds-step-line { background: var(--p); }

        .ds-prog-row {
          display: flex; align-items: center; gap: 12px;
          padding: 0 20px 14px;
        }
        .ds-prog-bar { flex: 1; height: 4px; background: rgba(255,255,255,0.05); border-radius: 4px; overflow: hidden; }
        .ds-prog-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--p-dark), var(--p));
          border-radius: 4px;
          transition: width .4s cubic-bezier(.4,0,.2,1);
          box-shadow: 0 0 8px var(--p-glow);
        }
        .ds-prog-label {
          font-size: 12px; color: var(--p); font-weight: 600;
          min-width: 32px; text-align: right;
        }

        .ds-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--r);
          margin-bottom: 12px;
          overflow: hidden;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        .ds-card-title-bar {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 18px;
          border-bottom: 1px solid var(--border);
          background: var(--surface2);
        }
        .ds-card-icon {
          width: 26px; height: 26px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ds-card-title-text {
          font-size: 14px; font-weight: 600; color: var(--t1); flex: 1;
        }
        .ds-card-body { padding: 18px; }

        .ds-field { margin-bottom: 18px; position: relative; }
        .ds-field:last-child { margin-bottom: 0; }
        .ds-field-label {
          font-size: 12.5px; color: var(--t2);
          margin-bottom: 6px; font-weight: 500;
          display: flex; align-items: center; gap: 6px;
        }
        .ds-req-star { color: var(--red); font-weight: 700; font-size: 15px; line-height: 1; }
        
        .ds-field input, .ds-field select, .ds-field textarea {
          width: 100%; padding: 10px 14px;
          font-size: 13.5px; border-radius: var(--rs);
          border: 1.5px solid var(--border);
          background: rgba(0,0,0,0.2); color: var(--t1);
          outline: none; transition: all var(--t);
        }
        .ds-field input:hover, .ds-field select:hover, .ds-field textarea:hover { border-color: var(--border-hover); background: rgba(0,0,0,0.3); }
        .ds-field input:focus, .ds-field select:focus, .ds-field textarea:focus {
          border-color: var(--p);
          background: rgba(0,0,0,0.4);
          box-shadow: 0 0 0 3px var(--p-glow);
        }
        .ds-hint { font-size: 11px; color: var(--t4); margin-top: 5px; line-height: 1.45; }

        .ds-toggle-row {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 12px 14px; border-radius: var(--rs);
          border: 1.5px solid var(--border);
          margin-bottom: 12px; cursor: pointer;
          transition: all var(--t); background: rgba(0,0,0,0.2);
        }
        .ds-toggle-row:hover { border-color: var(--p-border); background: rgba(143,101,194,0.05); }
        .ds-toggle-row.checked { border-color: var(--p); background: var(--p-light); }
        .ds-toggle-row:last-child { margin-bottom: 0; }

        .ds-chk-box {
          width: 18px; height: 18px; border-radius: 4px;
          border: 2px solid var(--t4); flex-shrink: 0; margin-top: 2px;
          display: flex; align-items: center; justify-content: center;
          transition: all var(--t); background: transparent;
        }
        .ds-toggle-row.checked .ds-chk-box { background: var(--p); border-color: var(--p); }
        .ds-chk-label { flex: 1; }
        .ds-chk-name { font-size: 13.5px; font-weight: 600; color: var(--t1); }
        .ds-chk-desc { font-size: 12px; color: var(--t3); margin-top: 3px; line-height: 1.45; }

        .ds-btn {
          padding: 10px 22px; border-radius: var(--rs);
          font-size: 13.5px; font-weight: 600; cursor: pointer;
          border: 1.5px solid var(--border);
          background: rgba(0,0,0,0.3); color: var(--t2);
          transition: all var(--t);
        }
        .ds-btn:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.2); color: #fff; }
        .ds-btn.primary {
          background: var(--p); border-color: var(--p); color: #fff;
          box-shadow: 0 1px 4px rgba(143,101,194,.35);
        }
        .ds-btn.primary:hover {
          background: var(--p-dark); border-color: var(--p-dark);
          box-shadow: 0 3px 12px rgba(143,101,194,.5);
          transform: translateY(-1px);
        }
        .ds-btn.primary:active { transform: translateY(0); }
        .ds-btn.ghost { border-color: transparent; background: transparent; color: var(--t3); }
        .ds-btn.ghost:hover { background: rgba(255,255,255,0.05); color: #fff; }

        .ds-nav-btns {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 16px; padding: 14px 20px;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--r); backdrop-filter: blur(12px);
        }
        .ds-err-bar {
          display: flex; align-items: center; gap: 8px;
          padding: 12px 16px; border-radius: var(--rs);
          background: var(--red-light); border: 1px solid var(--red-border);
          margin-bottom: 14px; font-size: 13px; color: var(--red);
          font-weight: 500; animation: errIn .25s ease;
        }
        @keyframes errIn { from { opacity: 0; transform: translateY(-4px) } to { opacity: 1; transform: translateY(0) } }
        .ds-step-panel { animation: panelIn .2s ease; }
        @keyframes panelIn { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>

      {/* STEPPER HEADER */}
      <div className="ds-stepper-card">
        <div className="ds-stepper-header">
          <span className="ds-stepper-header-title">Demo Request</span>
          <span className="ds-stepper-header-sub">Step {curStep + 1} of {TOTAL_STEPS} — {STEP_NAMES[curStep]}</span>
        </div>
        
        <div className="ds-stepper">
          {[...Array(TOTAL_STEPS)].map((_, i) => {
            const isDone = i < curStep;
            const isActive = i === curStep;
            return (
              <React.Fragment key={i}>
                <div className={`ds-step ${isDone ? 'done' : ''} ${isActive ? 'active' : ''}`}>
                  <div className="ds-step-inner" onClick={() => goStep(i)}>
                    <div className="ds-step-circle">
                      {isDone ? <Check className="w-3.5 h-3.5" /> : i + 1}
                    </div>
                    <div className="ds-step-label">{STEP_NAMES[i]}</div>
                  </div>
                </div>
                {i < TOTAL_STEPS - 1 && <div className={`ds-step-line ${isDone ? 'done' : ''}`} />}
              </React.Fragment>
            );
          })}
        </div>

        <div className="ds-prog-row">
          <div className="ds-prog-bar"><div className="ds-prog-fill" style={{ width: `${pct}%` }}></div></div>
          <span className="ds-prog-label">{pct}%</span>
        </div>
      </div>

      {/* ERROR BAR */}
      {error && (
        <div className="ds-err-bar">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/><path d="M8 5v3M8 9.8v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
          <span>{error}</span>
        </div>
      )}

      {/* STEP 0: Contact Info */}
      {curStep === 0 && (
        <div className="ds-step-panel">
          <div className="ds-card">
            <div className="ds-card-title-bar">
              <div className="ds-card-icon" style={{ background: 'var(--p-light)' }}>
                <Mail className="w-4 h-4 text-[#b07eff]" />
              </div>
              <span className="ds-card-title-text">Contact Information</span>
            </div>
            <div className="ds-card-body">
              <div className="ds-field">
                <div className="ds-field-label">Full Name <span className="ds-req-star">*</span></div>
                <input type="text" placeholder="e.g. Jane Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="ds-field">
                <div className="ds-field-label">Work Email <span className="ds-req-star">*</span></div>
                <input type="email" placeholder="e.g. jane@company.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                <div className="ds-hint">We use this to verify your organization domain.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 1: Company Info */}
      {curStep === 1 && (
        <div className="ds-step-panel">
          <div className="ds-card">
            <div className="ds-card-title-bar">
              <div className="ds-card-icon" style={{ background: 'rgba(59, 130, 246, 0.15)' }}>
                <Briefcase className="w-4 h-4 text-blue-400" />
              </div>
              <span className="ds-card-title-text">Company Details</span>
            </div>
            <div className="ds-card-body">
              <div className="ds-field">
                <div className="ds-field-label">Company Name <span className="ds-req-star">*</span></div>
                <input type="text" placeholder="e.g. Acme Corp" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
              </div>
              <div className="flex gap-4">
                <div className="ds-field flex-1">
                  <div className="ds-field-label">Role / Title</div>
                  <input type="text" placeholder="e.g. Cloud Architect" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} />
                </div>
                <div className="ds-field flex-1">
                  <div className="ds-field-label">Primary Cloud</div>
                  <select value={formData.cloud} onChange={e => setFormData({...formData, cloud: e.target.value})}>
                    <option>AWS</option>
                    <option>Azure</option>
                    <option>GCP</option>
                    <option>Multi-cloud</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: Use Case */}
      {curStep === 2 && (
        <div className="ds-step-panel">
          <div className="ds-card">
            <div className="ds-card-title-bar">
              <div className="ds-card-icon" style={{ background: 'rgba(245, 158, 11, 0.15)' }}>
                <Server className="w-4 h-4 text-amber-500" />
              </div>
              <span className="ds-card-title-text">What are you looking to achieve?</span>
            </div>
            <div className="ds-card-body">
              <div className={`ds-toggle-row ${checks['iac'] ? 'checked' : ''}`} onClick={() => toggleCheck('iac')}>
                <div className="ds-chk-box">{checks['iac'] && <Check className="w-3 h-3 text-white" strokeWidth={3} />}</div>
                <div className="ds-chk-label">
                  <div className="ds-chk-name">Visual Infrastructure as Code</div>
                  <div className="ds-chk-desc">Design architectures and generate Terraform code automatically</div>
                </div>
              </div>
              <div className={`ds-toggle-row ${checks['drift'] ? 'checked' : ''}`} onClick={() => toggleCheck('drift')}>
                <div className="ds-chk-box">{checks['drift'] && <Check className="w-3 h-3 text-white" strokeWidth={3} />}</div>
                <div className="ds-chk-label">
                  <div className="ds-chk-name">Drift Detection & Remediation</div>
                  <div className="ds-chk-desc">Detect differences between live cloud resources and infrastructure code</div>
                </div>
              </div>
              <div className={`ds-toggle-row ${checks['security'] ? 'checked' : ''}`} onClick={() => toggleCheck('security')}>
                <div className="ds-chk-box">{checks['security'] && <Check className="w-3 h-3 text-white" strokeWidth={3} />}</div>
                <div className="ds-chk-label">
                  <div className="ds-chk-name">Security & Compliance Scanning</div>
                  <div className="ds-chk-desc">Enforce least-privilege IAM and ensure resources meet compliance before deployment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: Book Demo */}
      {curStep === 3 && (
        <div className="ds-step-panel">
          <div className="ds-card">
            <div className="ds-card-title-bar">
              <div className="ds-card-icon" style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
                <CalendarCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="ds-card-title-text">Schedule your session</span>
            </div>
            <div className="ds-card-body text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                <CalendarCheck className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Ready to see InfraGlide in action?</h3>
              <p className="text-sm text-slate-400 mb-6 max-w-sm mx-auto">
                Submit your request and our team will prepare a personalized live demo environment for {formData.company || 'your organization'}.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* NAV BUTTONS */}
      <div className="ds-nav-btns">
        <div className="flex gap-2">
          {curStep > 0 && <button className="ds-btn" onClick={() => goStep(curStep - 1)}>← Back</button>}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[12.5px] text-slate-400 font-medium hidden sm:inline">Step {curStep + 1} of {TOTAL_STEPS}</span>
          <button className="ds-btn primary flex items-center gap-2" onClick={nextStep}>
            {curStep === TOTAL_STEPS - 1 ? 'Submit Request ✓' : 'Continue →'}
          </button>
        </div>
      </div>
    </div>
  );
}
