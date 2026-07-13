import { useEffect, useState, useRef } from 'react'
import { getNoticeState } from '../utils/maintenanceNotice'

const NOTICES_URL = 'https://json.beedev-services.com/maintenance/pages.json'

export default function useMaintenanceNotice(clientId, dataUrl = NOTICES_URL) {
  const [notice, setNotice]   = useState(null)
  const [visible, setVisible] = useState(false)
  const intervalRef           = useRef(null)

  useEffect(() => {
    let mounted = true

    async function load() {
      try {
        const res = await fetch(`${dataUrl}?_=${Date.now()}`)
        if (!res.ok) return
        const data  = await res.json()
        const entry = data.pages?.[clientId]
        if (!entry) return
        if (mounted) {
          const state = getNoticeState(entry, clientId)
          setNotice(state)
          setVisible(!!state)
        }
      } catch {
        // Fail silently — never break the app over a banner
      }
    }

    load()
    intervalRef.current = setInterval(load, 5 * 60 * 1000)

    return () => {
      mounted = false
      clearInterval(intervalRef.current)
    }
  }, [dataUrl, clientId])

  function dismiss() {
    if (!notice?.storageKey) return
    try {
      localStorage.setItem(notice.storageKey, JSON.stringify({ dismissed_at: Date.now() }))
    } catch { /* storage unavailable */ }
    setVisible(false)
  }

  return { notice, visible, dismiss }
}