const ramos = [
  // id, nombre, semestre, requisitos, créditos, tipo
  { id: "calculo_dif", nombre: "Cálculo Diferencial", semestre: "Semestre I", requisitos: [], creditos: 4, tipo: "ob_basicos" },
  { id: "algebra", nombre: "Álgebra Lineal", semestre: "Semestre I", requisitos: [], creditos: 3, tipo: "ob_basicos" },
  { id: "algoritmos", nombre: "Intro a Algoritmos", semestre: "Semestre I", requisitos: [], creditos: 3, tipo: "ob_basicos" },
  { id: "logica", nombre: "Lógica Matemática", semestre: "Semestre I", requisitos: [], creditos: 3, tipo: "ob_basicos" },
  { id: "textos1", nombre: "Textos I", semestre: "Semestre I", requisitos: [], creditos: 3, tipo: "ob_complementarios" },
  { id: "catedra_demo", nombre: "Cátedra Democracia", semestre: "Semestre I", requisitos: [], creditos: 1, tipo: "ob_complementarios" },
  { id: "catedra_caldas", nombre: "Cátedra Caldas", semestre: "Semestre I", requisitos: [], creditos: 1, tipo: "ob_complementarios" },

  { id: "fisica1", nombre: "Física I", semestre: "Semestre II", requisitos: ["calculo_dif", "algebra"], creditos: 3, tipo: "ob_basicos" },
  { id: "calculo_int", nombre: "Cálculo Integral", semestre: "Semestre II", requisitos: ["calculo_dif"], creditos: 3, tipo: "ob_basicos" },
  { id: "textos2", nombre: "Textos II", semestre: "Semestre II", requisitos: ["textos1"], creditos: 2, tipo: "ob_complementarios" },
  { id: "admin", nombre: "Administración", semestre: "Semestre II", requisitos: [], creditos: 3, tipo: "ob_complementarios" },
  { id: "contexto", nombre: "Cátedra Contexto", semestre: "Semestre II", requisitos: [], creditos: 1, tipo: "ob_complementarios" },
  { id: "estruct_datos", nombre: "Estructura de Datos", semestre: "Semestre II", requisitos: ["algoritmos", "logica"], creditos: 3, tipo: "ob_basicos" },
  { id: "oop", nombre: "Programación OOP", semestre: "Semestre II", requisitos: ["algoritmos"], creditos: 3, tipo: "ob_basicos" },

  { id: "contabilidad", nombre: "Contabilidad", semestre: "Semestre III", requisitos: [], creditos: 2, tipo: "el_intrinsecos" },
  { id: "organizacion", nombre: "Organización", semestre: "Semestre III", requisitos: [], creditos: 2, tipo: "el_intrinsecos" },
  { id: "ingles1", nombre: "Inglés I", semestre: "Semestre III", requisitos: [], creditos: 2, tipo: "ob_complementarios" },
  { id: "fisica2", nombre: "Física II", semestre: "Semestre III", requisitos: ["fisica1"], creditos: 3, tipo: "ob_basicos" },
  { id: "cts", nombre: "CTS", semestre: "Semestre III", requisitos: [], creditos: 2, tipo: "ob_complementarios" },
  { id: "prog_multinivel", nombre: "Prog. Multinivel", semestre: "Semestre III", requisitos: ["estruct_datos", "oop"], creditos: 3, tipo: "ob_basicos" },
  { id: "bd", nombre: "Bases de Datos", semestre: "Semestre III", requisitos: ["estruct_datos"], creditos: 3, tipo: "ob_basicos" },

  { id: "mat_esp", nombre: "Mat. Especiales", semestre: "Semestre IV", requisitos: ["calculo_int"], creditos: 3, tipo: "el_intrinsecos" },
  { id: "num_metodos", nombre: "Mét. Numéricos", semestre: "Semestre IV", requisitos: ["calculo_int"], creditos: 3, tipo: "el_intrinsecos" },
  { id: "emprendimiento", nombre: "Emprendimiento", semestre: "Semestre IV", requisitos: [], creditos: 2, tipo: "el_intrinsecos" },
  { id: "economia", nombre: "Economía", semestre: "Semestre IV", requisitos: [], creditos: 2, tipo: "el_intrinsecos" },
  { id: "tics", nombre: "TICs", semestre: "Semestre IV", requisitos: [], creditos: 2, tipo: "el_intrinsecos" },
  { id: "ingles2", nombre: "Inglés II", semestre: "Semestre IV", requisitos: ["ingles1"], creditos: 2, tipo: "ob_complementarios" },
  { id: "etica", nombre: "Ética", semestre: "Semestre IV", requisitos: [], creditos: 2, tipo: "ob_basicos" },
  { id: "prog_avanzada", nombre: "Prog. Avanzada", semestre: "Semestre IV", requisitos: ["prog_multinivel"], creditos: 3, tipo: "ob_basicos" },
  { id: "diseno_logico", nombre: "Diseño Lógico", semestre: "Semestre IV", requisitos: [], creditos: 3, tipo: "ob_basicos" },

  { id: "electiva1a", nombre: "Electiva SH I", semestre: "Semestre V", requisitos: [], creditos: 2, tipo: "el_extrinsecos" },
  { id: "electiva1b", nombre: "Electiva SH I (2)", semestre: "Semestre V", requisitos: [], creditos: 2, tipo: "el_extrinsecos" },

  { id: "analisis_sist", nombre: "Análisis Sistemas", semestre: "Semestre V", requisitos: ["prog_avanzada"], creditos: 3, tipo: "ob_basicos" },
  { id: "sis_op", nombre: "Sistemas Op.", semestre: "Semestre V", requisitos: ["diseno_logico"], creditos: 3, tipo: "ob_basicos" },
  { id: "taller_inv", nombre: "Taller Inv.", semestre: "Semestre V", requisitos: [], creditos: 2, tipo: "ob_basicos" },
  { id: "prog_web", nombre: "Prog. Web", semestre: "Semestre V", requisitos: ["prog_multinivel", "prog_avanzada"], creditos: 3, tipo: "el_intrinsecos" },
  { id: "app_internet", nombre: "App Internet", semestre: "Semestre V", requisitos: ["prog_multinivel", "prog_avanzada"], creditos: 3, tipo: "el_intrinsecos" },
  { id: "bd_distribuidas", nombre: "BD Distribuidas", semestre: "Semestre V", requisitos: ["bd"], creditos: 3, tipo: "el_intrinsecos" },

  { id: "ingles3", nombre: "Inglés III", semestre: "Semestre VI", requisitos: ["ingles2"], creditos: 2, tipo: "ob_complementarios" },
  { id: "telematica", nombre: "Telemática", semestre: "Semestre VI", requisitos: ["sis_op"], creditos: 3, tipo: "el_intrinsecos" },
  { id: "protocolos", nombre: "Protocolos", semestre: "Semestre VI", requisitos: ["sis_op"], creditos: 3, tipo: "el_intrinsecos" },
  { id: "comp", nombre: "Prog. Componentes", semestre: "Semestre VI", requisitos: ["prog_avanzada"], creditos: 3, tipo: "el_intrinsecos" },
  { id: "regulacion", nombre: "Regulación", semestre: "Semestre VI", requisitos: [], creditos: 3, tipo: "el_intrinsecos" },
  { id: "electiva2a", nombre: "Electiva SH II", semestre: "Semestre VI", requisitos: [], creditos: 2, tipo: "el_extrinsecos" },
  { id: "electiva2b", nombre: "Electiva SH II (2)", semestre: "Semestre VI", requisitos: [], creditos: 2, tipo: "el_extrinsecos" },
  { id: "trab_grado", nombre: "Trabajo Grado", semestre: "Semestre VI", requisitos: [], creditos: 2, tipo: "ob_basicos" },
  { id: "ia", nombre: "Inteligencia Artificial", semestre: "Semestre VI", requisitos: ["prog_avanzada"], creditos: 3, tipo: "ob_basicos" },
  { id: "arq", nombre: "Arquitectura", semestre: "Semestre VI", requisitos: [], creditos: 2, tipo: "ob_basicos" },

  // Propedéutico
  { id: "ecuaciones", nombre: "Ecuaciones Diferenciales", semestre: "Propedéutico", requisitos: ["calculo_int"], creditos: 3, tipo: "propedeutico" },
  { id: "bd_avanzadas", nombre: "BD Avanzadas", semestre: "Propedéutico", requisitos: ["bd"], creditos: 3, tipo: "propedeutico" },
  { id: "ing_software", nombre: "Ing. Software", semestre: "Propedéutico", requisitos: ["analisis_sist"], creditos: 3, tipo: "propedeutico" },
];

const estado = {};

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  const resumen = {
    ob_basicos: 0,
    ob_complementarios: 0,
    el_intrinsecos: 0,
    el_extrinsecos: 0,
    propedeutico: 0,
    total: 0
  };

  const semestres = [...new Set(ramos.map(r => r.semestre))];

  semestres.forEach(sem => {
    const grupo = document.createElement("div");
    grupo.className = "semestre";
    grupo.innerHTML = <h2>${sem}</h2>;

    ramos.filter(r => r.semestre === sem).forEach(ramo => {
      const btn = document.createElement("div");
      btn.className = "ramo";
      btn.textContent = ramo.nombre;

      const requisitosOk = ramo.requisitos.every(id => estado[id]);
      const aprobado = estado[ramo.id];

      if (!requisitosOk && !aprobado) {
        btn.classList.add("bloqueado");
      } else if (aprobado) {
        btn.classList.add("aprobado");
        resumen[ramo.tipo] += ramo.creditos;
        resumen.total += ramo.creditos;
      }

      btn.onclick = () => {
        if (btn.classList.contains("bloqueado")) return;
        estado[ramo.id] = !estado[ramo.id];
        renderMalla();
      };

      grupo.appendChild(btn);
    });

    contenedor.appendChild(grupo);
  });

  document.getElementById("totalAprobados").textContent = resumen.total;
  document.getElementById("ob_basicos").textContent = resumen.ob_basicos;
  document.getElementById("ob_complementarios").textContent = resumen.ob_complementarios;
  document.getElementById("el_intrinsecos").textContent = resumen.el_intrinsecos;
  document.getElementById("el_extrinsecos").textContent = resumen.el_extrinsecos;
  document.getElementById("propedeutico").textContent = resumen.propedeutico;
}

renderMalla();
