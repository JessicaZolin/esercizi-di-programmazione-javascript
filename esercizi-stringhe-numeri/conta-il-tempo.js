/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

let time = 12560;
const h = Math.round(time / 3600) // 3600 secondi in 1 ora
const m = Math.round((time - h * 3600) / 60) // 60 secondi in 1 minuto
const s = Math.round(time - h * 3600 - m * 60)

console.log(h + ' ore, ' + m + ' minuti, ' + s + ' secondi.');
