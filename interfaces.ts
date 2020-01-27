interface Reportable {
    name: string;
    year: Date;
    broken: boolean;
    summary(owner:string): string;
};

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(owner:string): string {
        return `the name is: ${this.name} and it belongs to ${owner}`;
    }
};

const printVehicle = (vehicle: {name: string; year: Date; broken:boolean}): void => {
    console.log(`name: ${vehicle.name}`);
    console.log(`year: ${vehicle.year}`);
    console.log(`broken: ${vehicle.broken}`);

};


const printVehicle2 = (vehicle: Reportable) : void => {
    console.log(`name: ${vehicle.name}`);
    console.log(`year: ${vehicle.year}`);
    console.log(`broken: ${vehicle.broken}`);
    console.log(vehicle.summary('cliff'));

};

printVehicle(oldCivic);
printVehicle2(oldCivic);