const ramos = [
  // Año 1 - Semestre 1
  { id: "calculo_dif", nombre: "Cálculo Diferencial", semestre: "Semestre I", requisitos: [] },
  { id: "algebra", nombre: "Álgebra Lineal", semestre: "Semestre I", requisitos: [] },
  { id: "algoritmos", nombre: "Intro a Algoritmos", semestre: "Semestre I", requisitos: [] },
  { id: "logica", nombre: "Lógica Matemática", semestre: "Semestre I", requisitos: [] },
  { id: "textos1", nombre: "Textos I", semestre: "Semestre I", requisitos: [] },
  { id: "catedra_demo", nombre: "Cátedra Democracia", semestre: "Semestre I", requisitos: [] },
  { id: "catedra_caldas", nombre: "Cátedra F. J. de Caldas", semestre: "Semestre I", requisitos: [] },

  // Año 1 - Semestre 2
  { id: "fisica1", nombre: "Física I", semestre: "Semestre II", requisitos: ["calculo_dif", "algebra"] },
  { id: "calculo_int", nombre: "Cálculo Integral", semestre: "Semestre II", requisitos: ["calculo_dif"] },
  { id: "textos2", nombre: "Textos II", semestre: "Semestre II", requisitos: ["textos1"] },
  { id: "admin", nombre: "Administración", semestre: "Semestre II", requisitos: [] },
  { id: "contexto", nombre: "Cátedra de Contexto", semestre: "Semestre II", requisitos: [] },
  { id: "estruct_datos", nombre: "Estructura de Datos", semestre: "Semestre II", requisitos: ["algoritmos", "logica"] },
  { id: "oop", nombre: "Programación OOP", semestre: "Semestre II", requisitos: ["algoritmos"] },

  // Año 2 - Semestre 3
  { id: "contabilidad", nombre: "Contabilidad", semestre: "Semestre III", requisitos: [] },
  { id: "organizacion", nombre: "Organización", semestre: "Semestre III", requisitos: [] },
  { id: "ingles1", nombre: "Inglés I", semestre: "Semestre III", requisitos: [] },
  { id: "fisica2", nombre: "Física II", semestre: "Semestre III", requisitos: ["fisica1"] },
  { id: "cts", nombre: "Ciencia, Tecnología y Sociedad", semestre: "Semestre III", requisitos: [] },
  { id: "prog_multinivel", nombre: "Programación Multinivel", semestre: "Semestre III", requisitos: ["estruct_datos", "oop"] },
  { id: "bd", nombre: "Bases de Datos", semestre: "Semestre III", requisitos: ["estruct_datos"] },

  // Año 2 - Semestre 4
  { id: "mat_esp", nombre: "Matemáticas Especiales", semestre: "Semestre IV", requisitos: ["calculo_int"] },
  { id: "num_metodos", nombre: "Métodos Numéricos", semestre: "Semestre IV", requisitos: ["calculo_int"] },
  { id: "emprendimiento", nombre: "Emprendimiento", semestre: "Semestre IV", requisitos: [] },
  { id: "economia", nombre: "Economía", semestre: "Semestre IV", requisitos: [] },
  { id: "tics", nombre: "TICs en Organizaciones", semestre: "Semestre IV", requisitos: [] },
  { id: "ingles2", nombre: "Inglés II", semestre: "Semestre IV", requisitos: ["ingles1"] },
  { id: "etica", nombre: "Ética y Sociedad", semestre: "Semestre IV", requisitos: [] },
  { id: "prog_avanzada", nombre: "Programación Avanzada", semestre: "Semestre IV", requisitos: ["prog_multinivel"] },
  { id: "diseno_logico", nombre: "Diseño Lógico", semestre: "Semestre IV", requisitos: [] },

  // Año 3 - Semestre 5
  { id: "trans_datos", nombre: "Transmisión de Datos", semestre: "Semestre V", requisitos: ["diseno_logico"] },
  { id: "prog_web", nombre: "Programación Web", semestre: "Semestre V", requisitos: ["prog_multinivel", "prog_avanzada"] },
  { id: "electiva1a", nombre: "Electiva SocioHuman I (1)", semestre: "Semestre V", requisitos: [] },
  { id: "electiva1b", nombre: "Electiva SocioHuman I (2)", semestre: "Semestre V", requisitos: [] },
  { id: "analisis_sist", nombre: "Análisis de Sistemas", semestre: "Semestre V", requisitos: ["prog_avanzada"] },
  { id: "sis_op", nombre: "Sistemas Operacionales", semestre: "Semestre V", requisitos: ["diseno_logico"] },
  { id: "taller_inv", nombre: "Taller de Investigación", semestre: "Semestre V", requisitos: [] },
  { id: "app_internet", nombre: "Aplicaciones Internet", semestre: "Semestre V", requisitos: ["prog_multinivel", "prog_avanzada"] },
  { id: "bd_distribuidas", nombre: "BD Distribuidas", semestre: "Semestre V", requisitos: ["bd"] },

  // Año 3 - Semestre 6
  { id: "ingles3", nombre: "Inglés III", semestre: "Semestre VI", requisitos: ["ingles2"] },
  { id: "telematica", nombre: "Fundamentos Telemática", semestre: "Semestre VI", requisitos: ["sis_op"] },
  { id: "protocolos", nombre: "Protocolos de Comunicación", semestre: "Semestre VI", requisitos: ["sis_op"] },
  { id: "comp", nombre: "Prog. Componentes", semestre: "Semestre VI", requisitos: ["prog_avanzada"] },
  { id: "regulacion", nombre: "Regulación Telecom", semestre: "Semestre VI", requisitos: [] },
  { id: "electiva2a", nombre: "Electiva SocioHuman II (1)", semestre: "Semestre VI", requisitos: [] },
  { id: "electiva2b", nombre: "Electiva SocioHuman II (2)", semestre: "Semestre VI", requisitos: [] },
  { id: "trab_grado", nombre: "Trabajo de Grado", semestre: "Semestre VI", requisitos: [] },
  { id: "ia", nombre: "Inteligencia Artificial", semestre: "Semestre VI", requisitos: ["prog_avanzada"] },
  { id: "arq", nombre: "Arquitectura Computadores", semestre: "Semestre VI", requisitos: [] },

  // Propedéutico
  { id: "ecuaciones", nombre: "Ecuaciones Diferenciales", semestre: "Propedéutico", requisitos: ["calculo_int"] },
  { id: "bd_avanzadas", nombre: "BD Avanzadas", semestre: "Propedéutico", requisitos: ["bd"] },
  { id: "ing_software", nombre: "Ingeniería de Software", semestre: "Propedéutico", requisitos: ["analisis_sist"] },
];

const estado = {};

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  const semestres = [...new Set(ramos.map(r => r.semestre))];

  semestres.forEach(sem => {
    const grupo = document.createElement("div");
    grupo.className = "semestre";
    grupo.innerHTML = `<h2>${sem}</h2>`;

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
}

renderMalla();
