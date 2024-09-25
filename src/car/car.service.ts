import { Injectable } from '@nestjs/common';
import { CARS } from './car.mock';

@Injectable()
export class CarService {
    private car = CARS;
    public async getCars(){
        return this.car;
    }
}
