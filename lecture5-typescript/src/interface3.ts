interface ICity {
    name: string
}

interface IZipcode extends ICity {
    zipcode: number
}

const street: IZipcode = {
    name: '1000 N 4th',
    zipcode: 52557
}

