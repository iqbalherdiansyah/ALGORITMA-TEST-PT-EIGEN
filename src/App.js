import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [soal1, setSoal1] = useState(null);
  const [soal2, setSoal2] = useState(null);
  const [soal3, setSoal3] = useState(null);
  const [soal4, setSoal4] = useState(null);
  const [result, setResult] = useState(null);

  // soal 1
  const stringSoal1 = "NEGIE1";

  const actionSoal1 = () => {
    const splitStringSoal1 = stringSoal1.split('');
    splitStringSoal1.splice(splitStringSoal1.indexOf('1'), 1)
    splitStringSoal1.reverse()
    splitStringSoal1.push('1')
    const joinSoal1 = splitStringSoal1.join("")

    return setSoal1(joinSoal1)
  }
  
  // soal 2
  const sentence = "Saya sangat senang mengerjakan soal algoritma"

  const actionSoal2 = () => {
    const splitSoal2 = sentence.split(' ');
    const value = []
    let lounglest = []

    const valuePush = splitSoal2.map((e) => {
      value.push({name : e, valueLength : e.length})     
      lounglest.push(e.length) 
    })

    const max = Math.max(...lounglest)

    value.map((e) => {
      if (e.valueLength === max) {
        setSoal2(`${e.name} : ${e.valueLength} character`)
      }
    })
  }

  // soal 3
  let INPUT = ['xc', 'dz', 'bbb', 'dz']  
  let QUERY = ['bbb', 'ac', 'dz']
 
  const actionSoal3 = () => {
    let result = [];
    let finalResult = [];
    result.push(...QUERY)
    result.map((e, i) => {
      INPUT.map((a, o) => {
        if (INPUT[o] === result[i]) {
          result[i] = 0
          result[i] = result[i] += INPUT.filter(elm => elm === e).length
        } 
      })
    })

    finalResult.push(...result)
    finalResult.map((a, i) => {
      if (typeof(finalResult[i]) === 'string') {
        finalResult[i] = 0
      }
    })
    setSoal3(finalResult)
  }

  // soal 4
  let Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
  function actionSoal4 () {
    const diagonalPertama = [];
    const diagonalKedua = [];
    diagonalPertama.push(Matrix[0][0], Matrix[1][1], Matrix[2][2])
    diagonalKedua.push(Matrix[0][2], Matrix[1][1], Matrix[2][0])

    const result = diagonalPertama.reduce((previousValue, currentValue) => previousValue += currentValue) - diagonalKedua.reduce((previousValue, currentValue) => previousValue += currentValue)

    setSoal4(result);
  }

  console.log(result)

  useEffect(() => {
    actionSoal1()
    actionSoal2()
    actionSoal3()
    actionSoal4()
    setResult({
      soal1 : soal1,
      soal2 : soal2,
      soal3 : soal3,
      soal4 : soal4
    })
  }, [])

  return (
    <h1>TECHNICAL TEST PT. EIGEN TRI MATHEMA</h1>
  )
}

export default App;
