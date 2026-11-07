import {
  Binary,
  Brain,
  Braces,
  ChartColumn,
  ClipboardList,
  Code2,
  Coffee,
  Cpu,
  Database,
  FileCode2,
  Flame,
  Github,
  GitBranch,
  Layers,
  LayoutGrid,
  Notebook,
  SquareTerminal,
  Table2,
  Terminal,
} from "lucide-react";

const icons = {
  Python: Braces,
  "C++": Code2,
  C: Code2,
  "C#": Code2,
  Java: Coffee,
  JavaScript: FileCode2,
  PHP: FileCode2,
  "HTML/CSS": Code2,
  MySQL: Database,
  PyTorch: Flame,
  "Scikit-learn": Brain,
  Pandas: Table2,
  NumPy: Binary,
  Matplotlib: ChartColumn,
  Seaborn: ChartColumn,
  Gradio: LayoutGrid,
  Git: GitBranch,
  GitHub: Github,
  "VS Code": SquareTerminal,
  "Visual Studio": Layers,
  "Google Colab": Notebook,
  "Jupyter Notebooks": Notebook,
  "Notepad++": FileCode2,
  LaTeX: FileCode2,
  MATLAB: ChartColumn,
  "VHDL (Basic)": Cpu,
  Proteus: Cpu,
  "NI Multisim": Cpu,
  Notion: Notebook,
  Trello: ClipboardList,
};

export function SkillIcon({ name }: { name: string }) {
  const Icon = icons[name as keyof typeof icons] ?? Terminal;
  return (
    <Icon size={18} className="text-blue-300 shrink-0" aria-hidden="true" />
  );
}
