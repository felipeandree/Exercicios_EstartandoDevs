//Criar um script que calcula a média (e adiciona ao objeto) a partir de um array de notas e de console.log seguindo o padrão: "Fulano(a) teve média 8".
// Entrada : 

//ARRAY DE OBJETOS 


const alunos = [
  { nome: 'Joao', notas: [5, 7.5, 8, 8, 4.5, 9] },
  { nome: 'Breno', notas: [10, 8.5, 10, 7.5, 9, 6.5] },
  { nome: 'Pedro', notas: [5.5, 8.3, 9.5, 8, 9, 6.9] },
  { nome: 'Fulano', notas: [5.9, 8.5, 4, 8, 9.5, 6] },
  { nome: 'Angelino', notas: [0, 4.8, 9.2, 8.5, 4.9, 6.1] },
  { nome: 'Jaja', notas: [10, 4.3, 6.8, 8.25, 9.4, 6] },
  { nome: 'Frederico', notas: [3.5, 8, 10, 8.5, 9, 3.8] },
  { nome: 'Jonatas', notas: [6, 8.5, 8, 6.5, 7, 10] },
  { nome: 'Henrique', notas: [4, 8.2, 5.5, 8.5, 5.4, 6] }
];

alunos.forEach((aluno) => {
  let total = 0;
  aluno.notas.forEach((nota) => {
      total = total + nota;
  });
  aluno.media = Math.round((total / aluno.notas.length)* 10)/10;
  console.log(aluno.nome + ' teve média de ' + aluno.media);
});

console.log(alunos);




