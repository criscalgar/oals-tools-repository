import * as service from '../services/provincesService.js';

export function getProvinces(req, res) {
    service.getProvinces(req, res);
}

export function findByprovince(req, res) {
    service.findByprovince(req, res);
}

