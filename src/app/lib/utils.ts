export type Page = "home" | "resume" | "projects" | "contact" | "not-found";

export function getPage(hash: string): Page {
  const path = hash.replace(/^#\/?/, "").replace(/\/$/, "");
  if (path === "") return "home";
  if (path === "portfolio") return "projects";
  return ["resume", "projects", "contact"].includes(path)
    ? (path as Page)
    : "not-found";
}

export function getYouTubeVideoId(value: string): string | null {
  const input = value.trim();
  if (/^[\w-]{11}$/.test(input)) return input;
  try {
    const url = new URL(input);
    if (!["https:", "http:"].includes(url.protocol)) return null;
    const host = url.hostname.toLowerCase();
    let id: string | null = null;
    if (host === "youtu.be") id = url.pathname.split("/")[1];
    else if (
      [
        "youtube.com",
        "www.youtube.com",
        "m.youtube.com",
        "youtube-nocookie.com",
        "www.youtube-nocookie.com",
      ].includes(host)
    ) {
      const parts = url.pathname.split("/").filter(Boolean);
      if (parts[0] === "watch") id = url.searchParams.get("v");
      else if (["embed", "shorts", "live"].includes(parts[0])) id = parts[1];
    }
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

export function buildContactMailto(
  recipient: string,
  form: { name: string; email: string; message: string },
): string {
  const name = form.name.trim().replace(/[\r\n]+/g, " ");
  const subject = `Portfolio enquiry from ${name}`;
  const body = `Name: ${name}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`;
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
