
export interface SearchProps {
  setLayer: () => void;
}
export interface SearchResultsProps {
  data: any[];
  isVisible: boolean;
  loading: boolean;
  setVisibility: (val: boolean) => void;
  setLayer: (val: any) => void;
}
