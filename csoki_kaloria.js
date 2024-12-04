document.getElementById("beadás").addEventListener("click", function (e) {
    e.preventDefault();

    const db = Number(document.getElementById("darab").value);
    const fajta = document.getElementById("valasztek").selectedIndex;
    const tCs = document.getElementById("tej").checked;
    const fCs = document.getElementById("f").checked;
    const etCs = document.getElementById("et").checked;
    let isValid = true;

    if (!db || db <= 0) {
        alert("Kérlek, adj meg egy pozitív számot a napi csokimennyiséghez!");
        isValid = false;
    }

    if (fajta < 0) {
        alert("Kérlek, válassz egy csokoládé márkát!");
        isValid = false;
    }

    if (!tCs && !fCs && !etCs) {
        alert("Kérlek, válaszd ki a kedvenc hagyományos csokoládé fajtádat!");
        isValid = false;
    }

    if (!isValid) return; //kell hogy ne fusson tovább a program, ha nem igazaak az adatok

    let kaloria = 0;
    let szoveg = "";
    let egyeb = "";

    if (tCs) {
        switch (fajta) {
            case 0:
                kaloria = 530 * db;
                break;
            case 1:
                kaloria = 546 * db;
                break;
            case 2:
                kaloria = 530 * db;
                egyeb = "90g";
                break;
            case 3:
                kaloria = 545 * db;
                break;
            case 4:
                kaloria = 579 * db;
                egyeb = "90g";
                break;
            case 5:
                kaloria = 534 * db;
                break;
            case 6:
                kaloria = 579 * db;
                break;
        }
    }

    if (fCs) {
        switch (fajta) {
            case 0:
                kaloria = 540 * db;
                break;
            case 1:
                kaloria = 558 * db;
                break;
            case 2:
                kaloria = 0;
                egyeb = "90g";
                break;
            case 3:
                kaloria = 642 * db;
                break;
            case 4:
                kaloria = 0;
                egyeb = "90g";
                break;
            case 5:
                kaloria = 535 * db;
                break;
            case 6:
                kaloria = 0;
                break;
        }
    }

    if (etCs) {
        switch (fajta) {
            case 0:
                kaloria = 0;
                break;
            case 1:
                kaloria = 516 * db;
                break;
            case 2:
                kaloria = 529 * db;
                egyeb = "90g";
                break;
            case 3:
                kaloria = 610 * db;
                break;
            case 4:
                kaloria = 556 * db;
                egyeb = "90g";
                break;
            case 5:
                kaloria = 534 * db;
                break;
            case 6:
                kaloria = 548 * db;
                break;
        }
    }

    // Kimenet
    if (kaloria === 0) {
        szoveg = "Nem létezik ilyen márkájú csoki fajta.";
        document.getElementById("szoveges").value = szoveg;
        document.getElementById("szamos").value = kaloria;
    }

    if (kaloria > 0) {
        if (egyeb === "90g") {
            if (confirm("Ugye tudod, hogy ugyan annyi pénzért 10 grammal kevesebb csokit eszel?")) {
                szoveg = "90g csokiban lévő kalória:";
                document.getElementById("szoveges").value = szoveg;
                document.getElementById("szamos").value = kaloria;
            }
        }

        if (egyeb !== "90g") {
            szoveg = "Kalória (kcal):";
            document.getElementById("szoveges").value = szoveg;
            document.getElementById("szamos").value = kaloria;
        }
    }
});
