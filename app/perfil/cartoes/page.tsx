import SiteNav from "@/app/components/SiteNav";

export default function Perfil() {
  return (
    <>
      <SiteNav current="/perfil/cartoes" />

      <header>
        <div className="logo">forge<span>craft</span></div>
      </header>

      <main>

        <div className="side">

          <a href="/perfil" className="side-item">Dados pessoais</a>
          <a href="/perfil/enderecos" className="side-item">Endereços</a>
          <a href="/perfil/cartoes" className="side-item active">Cartões</a>
          <a href="/perfil/senha" className="side-item">Senha</a>
          <a href="../pedidos" className="side-item">Meus pedidos</a>
          <a href="../cupons" className="side-item">Meus cupons</a>

        </div>

        <div>

          <h1>Meu perfil</h1>

          <div className="card">

            <h3>Dados pessoais</h3>

            <div className="form-grid">
              <div className="form-row"><label>Nome completo</label><input type="text" value="Isabelly Mariane Souza da Silva" /></div>
              <div className="form-row"><label>CPF</label><input type="text" value="•••.•••.•••-••" disabled /></div>
              <div className="form-row"><label>E-mail</label><input type="text" value="isabelly@email.com" /></div>
              <div className="form-row"><label>Telefone</label><input type="text" value="(11) 9••••-••••" /></div>
            </div>

            <button className="save-btn">Salvar alterações</button>

          </div>

          <div className="card">

            <h3>Endereços cadastrados</h3>

            <div className="addr-row"><span>Casa — Rua das Palmeiras, 245<span className="tag">padrão</span></span><span className="link">editar</span></div>
            <div className="addr-row"><span>Trabalho — Av. Piraporinha, 1200</span><span className="link">editar</span></div>

          </div>

          <div className="card">

            <h3>Cartões cadastrados</h3>

            <div className="card-row"><span>Nubank •••• 4471<span className="tag">preferencial</span></span><span className="link">remover</span></div>
            <div className="card-row"><span>Inter •••• 8823</span><span className="link">remover</span></div>

          </div>

          <div className="card danger-zone">

            <h3>Inativar cadastro</h3>

            <p style={{fontSize: "12px", color: "var(--text-secondary)", marginBottom: "14px"}}>Seu histórico é mantido, mas você não poderá fazer login até reativar com o suporte.</p>
            <button className="danger-btn">Inativar minha conta</button>

          </div>

        </div>

      </main>

      <style>{`
      * { box-sizing:border-box; margin:0; padding:0; }
        
        header { display:flex; align-items:center; justify-content:space-between; padding:20px 40px; border-bottom:1px solid var(--border); }
        .logo { font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:20px; }
        .logo span { color:var(--purple); }
        main { max-width:900px; margin:0 auto; padding:40px; display:grid; grid-template-columns:220px 1fr; gap:36px; }
        .side { display:flex; flex-direction:column; gap:4px; }
        .side-item { padding:10px 14px; border-radius:8px; font-size:13px; color:var(--text-secondary); cursor:pointer; }
        .side-item.active { background:var(--surface); color:var(--purple); border:1px solid var(--border); }
        h1 { font-family:'Space Grotesk',sans-serif; font-size:22px; font-weight:700; margin-bottom:24px; }
        .card { background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:20px; margin-bottom:20px; }
        .card h3 { font-size:14px; font-weight:500; margin-bottom:16px; }
        .form-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
        .form-row label { display:block; font-size:11px; color:var(--text-secondary); margin-bottom:6px; }
        .form-row input { width:100%; background:var(--bg); border:1px solid var(--border); border-radius:8px; padding:10px 12px; color:var(--text-primary); font-size:13px; }
        .save-btn { background:var(--purple); color:var(--bg); border:none; border-radius:8px; padding:10px 18px; font-size:13px; font-weight:500; margin-top:16px; cursor:pointer; }
        .addr-row, .card-row { display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid var(--border); font-size:13px; }
        .addr-row:last-child, .card-row:last-child { border-bottom:none; }
        .tag { font-family:'JetBrains Mono',monospace; font-size:10px; color:var(--mint); background:rgba(0,224,184,0.1); padding:2px 8px; border-radius:6px; margin-left:8px; }
        .link { color:var(--purple); font-size:12px; cursor:pointer; }
        .danger-zone { border:1px solid rgba(255,92,108,0.3); }
        .danger-zone h3 { color:var(--red); }
        .danger-btn { background:none; border:1px solid var(--red); color:var(--red); border-radius:8px; padding:10px 16px; font-size:13px; cursor:pointer; }
      `}</style>
      
    </>
  );
}
