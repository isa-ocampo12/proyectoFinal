
import Header from '../components/Header';
import './Empleados.css';
const Empleados = () => {
  return (
    
    <div>
        <Header />
      <h1 className="smokemonster">Empleados de Suramericana</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cargo</th>
            <th>Salario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Carlos</td>
            <td>Ramírez</td>
            <td>Analista de Datos</td>
            <td>$2,000,000</td>
          </tr>
          <tr>
            <td>María</td>
            <td>Gómez</td>
            <td>Desarrolladora Web</td>
            <td>$2,200,000</td>
          </tr>
          <tr>
            <td>Luis</td>
            <td>Martínez</td>
            <td>Gerente de Proyectos</td>
            <td>$3,500,000</td>
          </tr>
          <tr>
            <td>Ana</td>
            <td>López</td>
            <td>Especialista en Recursos Humanos</td>
            <td>$2,500,000</td>
          </tr>
          <tr>
            <td>Javier</td>
            <td>Fernández</td>
            <td>Contador</td>
            <td>$2,300,000</td>
          </tr>
          <tr>
            <td>Sofía</td>
            <td>Torres</td>
            <td>Ingeniera de Sistemas</td>
            <td>$3,000,000</td>
          </tr>
          <tr>
            <td>Fernando</td>
            <td>Rivera</td>
            <td>Asesor Financiero</td>
            <td>$2,700,000</td>
          </tr>
          <tr>
            <td>Laura</td>
            <td>Castillo</td>
            <td>Coordinadora de Ventas</td>
            <td>$2,100,000</td>
          </tr>
          <tr>
            <td>Daniel</td>
            <td>Suárez</td>
            <td>Ejecutivo de Cuentas</td>
            <td>$2,600,000</td>
          </tr>
          <tr>
            <td>Patricia</td>
            <td>Vega</td>
            <td>Diseñadora Gráfica</td>
            <td>$2,400,000</td>
          </tr>
          <tr>
            <td>Ricardo</td>
            <td>Ortega</td>
            <td>Analista de Marketing</td>
            <td>$2,200,000</td>
          </tr>
          <tr>
            <td>Claudia</td>
            <td>Morales</td>
            <td>Ingeniera de Software</td>
            <td>$3,200,000</td>
          </tr>
          <tr>
            <td>Oscar</td>
            <td>Hernández</td>
            <td>Consultor</td>
            <td>$3,000,000</td>
          </tr>
          <tr>
            <td>Lucía</td>
            <td>Santos</td>
            <td>Especialista en Comunicaciones</td>
            <td>$2,300,000</td>
          </tr>
          <tr>
            <td>Andrea</td>
            <td>Garza</td>
            <td>Administradora</td>
            <td>$2,800,000</td>
          </tr>
          <tr>
            <td>Emilio</td>
            <td>Pérez</td>
            <td>Director de TI</td>
            <td>$4,000,000</td>
          </tr>
          <tr>
            <td>Raúl</td>
            <td>Reyes</td>
            <td>Auditor</td>
            <td>$2,900,000</td>
          </tr>
          <tr>
            <td>Gabriela</td>
            <td>Medina</td>
            <td>Especialista en Logística</td>
            <td>$2,400,000</td>
          </tr>
          <tr>
            <td>Esteban</td>
            <td>Villanueva</td>
            <td>Coordinador de Producción</td>
            <td>$2,600,000</td>
          </tr>
          <tr>
            <td>Carmen</td>
            <td>Fuentes</td>
            <td>Secretaria Ejecutiva</td>
            <td>$2,100,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Empleados;
