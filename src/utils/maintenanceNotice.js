export const SEVERITY_MAP = {
  scheduled:   'warning',
  maintenance: 'info',
  emergency:   'danger',
}

export const ICON_MAP = {
  warning: '⚠️',
  info:    'ℹ️',
  danger:  '🔴',
}

const STORAGE_KEY_PREFIX = 'maint_dismiss_'

function getDismissDuration(msUntilMaint) {
  if (msUntilMaint <= 6 * 60 * 60 * 1000)  return 0
  if (msUntilMaint <= 24 * 60 * 60 * 1000) return 2 * 60 * 60 * 1000
  return 12 * 60 * 60 * 1000
}

export function getNoticeState(entry, clientId) {
  const now        = Date.now()
  const storageKey = `${STORAGE_KEY_PREFIX}${clientId}`

  if (!entry.is_active) return null

  if (entry.show_from  && now < new Date(entry.show_from).getTime())  return null
  if (entry.expires_at && now > new Date(entry.expires_at).getTime()) return null

  const severity = SEVERITY_MAP[entry.status] ?? 'info'

  const dismissDuration = entry.maint_at
    ? getDismissDuration(Math.max(0, new Date(entry.maint_at).getTime() - now))
    : 12 * 60 * 60 * 1000

  const canDismiss = entry.dismissible && dismissDuration > 0

  if (canDismiss) {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey))
      if (stored?.dismissed_at) {
        const elapsed = now - stored.dismissed_at
        if (elapsed < dismissDuration) return null
        localStorage.removeItem(storageKey)
      }
    } catch {
      localStorage.removeItem(storageKey)
    }
  }

  return { entry, severity, canDismiss, storageKey }
}