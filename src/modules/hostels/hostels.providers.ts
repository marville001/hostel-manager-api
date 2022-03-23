import { HOSTEL_REPOSITORY } from '../../core/constants';
import { Hostel } from './hostel.entity';

export const hostelsProviders = [{
    provide: HOSTEL_REPOSITORY,
    useValue: Hostel,
}];