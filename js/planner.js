// Tiny localStorage wrapper shared by every Planner page.
// Free tier = local-only storage, no account. Premium unlock (Gumroad $14)
// is checked via a license flag set in localStorage by the future unlock flow.
const Store = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem('tbt_' + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch { return fallback; }
  },
  set(key, value) {
    localStorage.setItem('tbt_' + key, JSON.stringify(value));
  },
  isPremium() {
    return this.get('premium', false) === true;
  },
  todayKey() {
    return new Date().toISOString().slice(0, 10);
  },
  monthKey() {
    return new Date().toISOString().slice(0, 7);
  },
};
