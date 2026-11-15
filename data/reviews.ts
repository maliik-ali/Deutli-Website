// Real student reviews only. Add each with the student's permission.
// While this list is empty the "Reviews" section and its menu link stay hidden.
export type Review = {
  name: string;
  /** City and/or exam result, e.g. "Lahore · Goethe B1, 78 points" */
  detail?: string;
  text: string;
  /** 1 to 5 */
  rating?: number;
  /** e.g. "2 weeks ago" or "Nov 2026" */
  date?: string;
  /** Optional photo, put the file in /public/reviews */
  photo?: string;
  /** Optional video review: poster image and video URL */
  video?: { poster: string; url: string };
};

export const reviews: Review[] = [];
