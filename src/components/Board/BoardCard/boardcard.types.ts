export interface BoardCardProps {
  boardId:string;
  name: string;
  rateh1: number;
  rateh2: number;
  rates1: number;
  rates2: number;
}

export interface EditBoardProps {
  boardId:string;
  name: string;
  onClose: () => void;
}
