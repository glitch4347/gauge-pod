import { TimeSerie, Options } from '@chartwerk/core';


export type GaugeTimeSerie = TimeSerie;

/**
 * The way to choose one value from metrics
 */
export enum Stat {
  CURRENT = 'current',
  // MIN     = 'min',
  // MAX     = 'max',
  // TOTAL   = 'total'
}

export type Threshold = {
  value: number,
  color: string
}

export type GaugeOptions = Options & {
  stat: Stat,
  thresholds?: Threshold[] // should be sorted
}

/***** OPTIONS UTILS ******/
/*
 * chartwerk core is garbage. We can't make our options to be a class,
 * because `chartwerk.core.Options` is a type, not a class..
 */

export namespace GaugeOptionsUtils {
  export function setChartwerkSuperPodDefaults(options: GaugeOptions): GaugeOptions { 
    options.usePanning = false;
    options.renderLegend = false;
    options.renderYaxis = false;
    options.renderXaxis = false;
    options.renderGrid = false;
    return options;
  }
}
