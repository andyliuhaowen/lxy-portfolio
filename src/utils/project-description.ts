class ProjectDescription {
  name: string;
  duration: string;
  category: string;
  focus: string;
  brief: string;
  comment: string | undefined;

  constructor(
    name: string,
    duration: string,
    category: string,
    focus: string,
    brief: string,
    comment?: string
  ) {
    this.name = name;
    this.duration = duration;
    this.category = category;
    this.focus = focus;
    this.brief = brief;
    this.comment = comment;
  }
}

export default ProjectDescription;
