// utils/maintenanceTime.js
export function getMaintenanceTokens(entry) {
  const tokens = {
    maint_date: '',
    maint_time: '',
    return_date: '',
    return_time: '',
  };

  if (entry.maint_at) {
    const maintDate = new Date(entry.maint_at);
    tokens.maint_date = maintDate.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    tokens.maint_time = maintDate.toLocaleTimeString(undefined, {
      hour: 'numeric',
      minute: '2-digit',
    });
  }

  if (entry.estimated_return_at) {
    const returnDate = new Date(entry.estimated_return_at);
    tokens.return_date = returnDate.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    tokens.return_time = returnDate.toLocaleTimeString(undefined, {
      hour: 'numeric',
      minute: '2-digit',
    });
  }

  return tokens;
}

export function fillMaintenanceTemplate(template, tokens) {
  if (!template) return template;
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return key in tokens ? tokens[key] : match;
  });
}

export function getEstimatedReturnDisplay(entry) {
  if (!entry.estimated_return_at) return null;
  const tokens = getMaintenanceTokens(entry);
  return `${tokens.return_date} at ${tokens.return_time}`;
}