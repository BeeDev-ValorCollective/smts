import useMaintenanceNotice from '../../customHooks/useMaintenanceNotice'
import { ICON_MAP } from '../../utils/maintenanceNotice'
import NoticeContent from './NoticeContent'
import './maintenance.css'

export default function MaintenanceNotice({ clientId = 'smts' }) {
  const { notice, visible, dismiss } = useMaintenanceNotice(clientId)

  if (!visible || !notice) return null

  const { entry, severity, canDismiss } = notice
  const icon = ICON_MAP[severity]

  return (
    <div className={`maint-notice maint-notice--${severity}`} role="status" aria-live="polite">
      <div className="maint-notice__track">
        <div className="maint-notice__scroll">
          <NoticeContent entry={entry} icon={icon} />
          <NoticeContent entry={entry} icon={icon} aria-hidden="true" />
        </div>
      </div>
      {canDismiss && (
        <button
          className="maint-notice__dismiss"
          onClick={dismiss}
          aria-label="Dismiss maintenance notice"
        >
          ✕
        </button>
      )}
    </div>
  )
}