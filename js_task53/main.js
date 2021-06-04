// В небольшом городке на начало года население p0 = 1000. Население регулярно увеличивается на 2 процента в год, 
// и более 50 новых жителей ежегодно приезжают в город. Сколько лет нужно городу, чтобы его население было больше или равно p = 1200 жителей?

// В конце первого года будет:
// 1000 + 1000 * 0,02 + 50 => 1070 жителей

// По окончании 2-го курса будут:
// 1070 + 1070 * 0,02 + 50 => 1141 житель (** количество жителей является целым числом **)

// В конце 3-го курса будут:
// 1141 + 1141 * 0,02 + 50 => 1213

// На это потребуется целых 3 года.
// Более общие параметры:

// p0, процент, авг (ежегодно приезжающие или уезжающие жители), p (превышение численности населения)
// функция nb_year должна возвращать n полных лет, необходимых для получения населения, большего или равного p.
// aug - целое число, процент - положительное или нулевое плавающее число, p0 и p - положительные целые числа (> 0)


// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

function nb_year (p0, percent, newcomers, p, year = 0) {
  if (p0 >= p) {
  return year
  } else {
  year += 1
  pop = p0 + p0 * (percent/100) + newcomers
  return nb_year(pop, percent, newcomers, p, year)
  }
}
console.log(nb_year(1500000, 2.5, 10000, 2000000));