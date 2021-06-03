// Если вы уже выполнили это ката и хотите посложнее, вот 3D-версия.

// Бобу скучно на уроках физики, поэтому он построил себе игрушечный ящик, чтобы скоротать время. Коробка особенная, потому что у нее есть способность изменять гравитацию.

// В коробке несколько столбиков игрушечных кубиков, выстроенных в линию. В i-м столбце находится a_i кубов. Сначала сила тяжести в коробке тянет кубики вниз. Когда Боб переключает гравитацию, он начинает тянуть все кубики к определенной стороне коробки, d, которая может быть либо «L», либо «R» (влево или вправо). Ниже приведен пример того, как может выглядеть коробка с кубиками до и после переключения силы тяжести. 

// flip('R', [3, 2, 1, 2])     =>  [1, 2, 2, 3]
// flip('L', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1]

function flip(d, a) {
  function min (a, b) {
    return a - b 
  }
  function max (a, b) {
    return b - a
  }
  if (d = 'R') {
    a.sort(min)
  } else if (d = 'L') {
    a.sort(max)
  }
  return a
}
console.log(flip('L', [0, 2, 3, 1, 4, 10]));