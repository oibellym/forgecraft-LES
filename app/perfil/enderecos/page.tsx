import SiteNav from "@/app/components/SiteNav";

export default function Perfil() {
  return (
    <>
      <SiteNav current="/perfil/enderecos" />

      <header>
        <div className="logo">forge<span>craft</span></div>
      </header>

      <main>

        <div className="side">

          <a href="/perfil" className="side-item">Dados pessoais</a>
          <a href="/perfil/enderecos" className="side-item active">Endereços</a>
          <a href="/perfil/cartoes" className="side-item">Cartões</a>
          <a href="/perfil/senha" className="side-item">Senha</a>
          <a href="../pedidos" className="side-item">Meus pedidos</a>
          <a href="../cupons" className="side-item">Meus cupons</a>

        </div>

        <div>

          <h1>Meus Endereços</h1> 

          <div className="card">

            <div className="endereco-row"><h3>Casa</h3><span className="tag">padrão</span></div>

            <div className="addr-row"><span>Rua das Palmeiras, 245</span></div>
            <div className="addr-row"><span>CEP: 01234-567, MOGI DAS CRUZES - SP</span></div>

            <button className="edit-btn">Realizar Alterações</button>

          </div>

          <div className="card">

            <div className="endereco-row"><h3>Trabalho</h3><span className="tag"> tornar padrão</span></div>

            <div className="addr-row"><span>Rua das Orquideas, 374</span></div>
            <div className="addr-row"><span>CEP: 89101-121, GUARULHOS - SP</span></div>

            <span className="edit-address"><button className="edit-btn">Realizar Alterações</button></span>

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
        .edit-btn { background:var(--purple); color:var(--bg); border:none; border-radius:8px; padding:10px 18px; font-size:13px; font-weight:500; margin-top:16px; cursor:pointer; }
        .endereco-row { display: inline-block; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid var(--border); font-size:13px; inline-size: 14px; font-weight: 500; }
        .addr-row, .card-row, .endereco-row { display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid var(--border); font-size:13px; }
        .addr-row:last-child, .card-row:last-child { border-bottom:none; }
        .tag { font-family:'JetBrains Mono',monospace; font-size:10px; color:var(--mint); background:rgba(0,224,184,0.1); padding:2px 8px; border-radius:6px; margin-left:8px; }
        .link { display:block; justify-content:space-between; align-items:end; color:var(--purple); font-size:12px; cursor:pointer; }
        .danger-zone { border:1px solid rgba(255,92,108,0.3); }
        .danger-zone h3 { color:var(--red); }
        .danger-btn { background:none; border:1px solid var(--red); color:var(--red); border-radius:8px; padding:10px 16px; font-size:13px; cursor:pointer; }
      `}</style>
      
    </>
  );
}
