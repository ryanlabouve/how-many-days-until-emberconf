import Controller from '@ember/controller';
import moment from 'moment';
import {computed} from '@ember/object';

const emberConfDate = moment('2019-03-18');

export default Controller.extend({
  daysUntilEmberConf: computed(() => {
    return emberConfDate.diff(moment(), 'days');
  }),
});
