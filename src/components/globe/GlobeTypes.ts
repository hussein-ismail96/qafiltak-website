export interface IGlobeData {
  globeImageUrl: string;
  backgroundColor?: string;
  labelSize?: number;
  labelText?: 'label';
  labelDotRadius?: number;
  onLabelClick?: (d: any) => void;
  labelsData: Array<ILabelsData>;
  pointAltitude?: 'size';
  pointColor?: string;
  labelLabel: (d: any) => string;
}

interface ILabelsData {
  lat: number;
  lng: number;
  label: string;
  url?: string;
  color: string;
}
