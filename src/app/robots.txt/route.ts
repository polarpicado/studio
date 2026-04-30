export function GET() {
  return new Response(
    `# IA aplicada a problemas reales.
# Y sí, este robots.txt también está optimizado ;)
# Si puedes leer esto, ya sabes qué hacer arañita.

User-agent: *
Allow: /

Sitemap: https://jbasanta.vercel.app/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    }
  );
}
