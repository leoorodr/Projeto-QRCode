(async () => {
    
    const db = require("./db");
    console.log('Começou!');

    console.log('INSERT INTO PROFESSOR');
    const result = await db.insertProfessor({nome: "ADMILSON COSTA PEREIRA", nif:"163627533", email:"ADMILSON.PEREIRA@SENAISP.EDU.BR", senha:"???", id:"MNO110"});
    console.log(result);


    console.log('SELECT *FROM PROFESSOR');
    const result = await db.selectProfessor({nome: "ATILA ANDREATTI OLIV",nif:"139337849", email:"ATILA.OLIVI@SENAISP.EDU.BR", senha:"???", id:"ABC001"})
    console.log(professor);

    console.log('UPDATE PROFESSOR');
    ult = await db.updateProfessor({nome: "DANILO SANTANA E SILVA", nif:"166421120", email:"DANILO.SILVA@SENAISP.EDU.BR", senha:"???", id:"DEF010"})
    console.log(result2);

    console.log('DELETE FROM PROFESSOR');
    const result2 = await db.deleteProfessor({id:"GHI100"})
    console.log(result3);

  
  })();