import Header from "../components/Header";
import './Registro.css';


const Registro = () => {
    return (
      <section>
        <Header /> 
  
        {/* <div className="logo">
          <img src="/img/logoConTrigre.png" alt="Logo con Tigre" />
        </div> */}
  
        <div className="contenedorTiger">
          <img className="tiger" src="/imagenes/tiger_tall-removebg-preview.png" alt="Tiger" />
        </div>
  
        <div className="container">
          <h2>Registro</h2>
          <form>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" required />
            </div>
  
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input type="text" id="apellido" name="apellido" required />
            </div>
  
            <div className="form-group">
              <label htmlFor="cargo">Cargo</label>
              <input type="text" id="cargo" name="cargo" required />
            </div>
  
            <div className="form-group">
              <label htmlFor="salario">Salario</label>
              <input type="number" id="salario" name="salario" required />
            </div>
  
            <button type="submit" className="btn-register">Registrar</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Registro;