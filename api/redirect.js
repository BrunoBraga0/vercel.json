
export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Referrer-Policy", "no-referrer");

  return res.redirect(
    302,
    "https://t.me/jennifazendeiraofc_bot"
  );
}
