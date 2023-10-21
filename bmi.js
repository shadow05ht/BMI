let weight = +prompt('Çəki:')
let height = +prompt('Uzunluq:')
let BMI = (weight / (height * height))*10000;
let netice;

if (BMI < 18) {
    netice = 'Siz, çəki azlığından əziyyət çəkirsiniz';
}
else if (BMI > 17 && BMI < 20) {
    netice = 'Sizin çəkiniz azdır. Lakin sağlamlıq üçün zərərli deyil.';
}
else if (BMI > 19 && BMI < 26) {
    netice = 'Sizin çəkiniz normaldır. Təbriklər!!!';
}
else if (BMI > 25 && BMI < 28) {
    netice = 'Sizin artıq çəkiniz var.';
}
else if (BMI > 27 && BMI < 31) {
    netice = 'Siz, 1-ci dərəcəli artıq çəkidən əziyyət çəkirsiniz.';
}
else if (BMI > 30 && BMI < 36) {
    netice = 'Siz, 2-ci dərəcəli artıq çəkidən əziyyət çəkirsiniz.';
}
else if (BMI > 35 && BMI < 41) {
    netice = 'Siz, 3-cü dərəcəli artıq çəkidən əziyyət çəkirsiniz.';
}
else if (BMI >= 41) {
    netice = 'Siz, 4-cü dərəcəli artıq çəkidən əziyyət çəkirsiniz.';
}
else {
    netice = 'Sizin başınızda problem var.';
}
document.getElementById('bmi').innerHTML = netice;
