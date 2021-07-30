import {Type} from '@angular/core';

interface ITrackBy {
  trackBy(): string;
}

export function trackBy(): (target: Type<any>) => typeof target & ITrackBy {
  return (target: Type<any>) => {
    class TrackByClass extends target implements ITrackBy {
      trackBy(): string {
        return '';
      }
    }
    return TrackByClass as Type<any> & ITrackBy;
  };
}
