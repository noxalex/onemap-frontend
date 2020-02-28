export interface SearchResultsProps {
  data: any[];
  isVisible: boolean;
  loading: boolean;
  setVisibility: (val: boolean) => void;
}