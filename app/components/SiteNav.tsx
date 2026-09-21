/**
 * SiteNav — barra de navegação com o mapa do site.
 *
 * Isso é usado em TODAS as páginas (veja o <SiteNav current="..." />
 * no topo de cada arquivo page.tsx). Editar aqui muda o menu em
 * todo o site de uma vez só — não precisa repetir em cada página.
 *
 * Cada link é um <a href="..."> normal, igual HTML puro.
 * A única diferença é a propriedade "current": ela recebe o
 * caminho da página atual (ex: "/carrinho") e serve só para
 * destacar visualmente o link ativo.
 */

const CLIENTE_LINKS = [
  { href: "/", label: "Catálogo" },
  { href: "/produto", label: "Produto" },
  { href: "/carrinho", label: "Carrinho" },
  { href: "/entrega", label: "Entrega" },
  { href: "/confirmacao", label: "Confirmação" },
  { href: "/perfil", label: "Perfil" },
  { href: "/perfil/cartoes", label: "Cartões" },
  { href: "/perfil/enderecos", label: "Endereços" },
  { href: "/pedidos", label: "Pedidos" },
  { href: "/cupons", label: "Cupons" },
  { href: "/chatbot", label: "Chatbot" },
  { href: "/login", label: "Login" },
  { href: "/cadastro", label: "Cadastro" },
];

const ADMIN_LINKS = [
  { href: "/admin", label: "Clientes/Pedidos" },
  { href: "/admin/status", label: "Status" },
  { href: "/admin/produtos", label: "Produtos" },
  { href: "/admin/estoque", label: "Estoque" },
  { href: "/admin/analise", label: "Análise" },
];

export default function SiteNav({ current }: { current: string }) {
  return (
    <div className="site-nav">
      <style>{`
        .site-nav {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
          padding: 10px 20px;
          background: #0A0B10;
          border-bottom: 1px solid var(--border);
          font-family: Arial, Helvetica, sans-serif;
        }
        .group-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: var(--text-secondary);
          margin-right: 4px;
        }
        .divider {
          width: 1px;
          height: 16px;
          background: var(--border);
          margin: 0 8px;
        }
        a.nav-link {
          font-size: 11px;
          padding: 4px 9px;
          border-radius: 6px;
          color: var(--text-secondary);
        }
        a.nav-link:hover {
          background: #1C1F29;
          color: var(--text-primary);
        }
        a.nav-link.active {
          background: var(--purple);
          color: var(--bg);
        }
      `}</style>

      <span className="group-label">CLIENTE</span>
      {CLIENTE_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={"nav-link" + (current === link.href ? " active" : "")}
        >
          {link.label}
        </a>
      ))}

      <span className="divider" />

      <span className="group-label">ADM</span>
      {ADMIN_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={"nav-link" + (current === link.href ? " active" : "")}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
