import { getMaintenanceTokens, fillMaintenanceTemplate, getEstimatedReturnDisplay } from '../../utils/maintenanceTime'

export default function NoticeContent({ entry, icon, ...props }) {
  const now = Date.now()
  const isUpcoming = entry.maint_at && now < new Date(entry.maint_at).getTime()
  const rawMsg = isUpcoming && entry.pre_message ? entry.pre_message : entry.message

  const tokens = getMaintenanceTokens(entry)
  const displayMsg = fillMaintenanceTemplate(rawMsg, tokens)
  const estimatedReturnDisplay = getEstimatedReturnDisplay(entry)

  return (
    <span className="maint-notice__segment" {...props}>
      <span className="maint-notice__icon" aria-hidden="true">{icon}</span>
      <span className="maint-notice__message">{displayMsg}</span>
      {estimatedReturnDisplay && (
        <span className="maint-notice__eta">
          Expected return: {estimatedReturnDisplay}
        </span>
      )}
      <span className="maint-notice__spacer" aria-hidden="true">•••</span>
    </span>
  )
}