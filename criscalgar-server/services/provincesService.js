export function getProvinces(req, res) {

    res.send([{
        province: "Sevilla",
        year: 2023
    }]);
}

export function findByprovince(req, res) {
    res.send({
        province: "Sevilla",
        year: 2023
    });
}