const students = [
    {
        name: 'Antony',
        firstnote: 1,
        secondnote: 6,
    },
    {
        name: 'José',
        firstnote: 7,
        secondnote: 5,
    },
    {
        name: 'Francisco',
        firstnote: 8,
        secondnote: 10,
    },
  ]
  
  function nf (firstnote, secondnote) {
    return ((firstnote + secondnote) / 2)
  }
  
  let motivationalphrase = []
  
  function printNf(students) {
  
    const average = nf(students.firstnote, students.secondnote)
  
    if ( average >= 7) {
        motivationalphrase = "Parabens voce foi aprovado(a)"
    } else {
        motivationalphrase = 'Voce esta reprovado(a). Mas não desista Tente novamente mais tarde.'
    } 
  
    return `
    A media do(a) aluno(a) ${students.name} foi de: ${average},
    ${motivationalphrase}
    `
  }
  
  for (student of students) {
    let message = printNf(student)
    alert(message)
  }