import * as moment from "moment";

export class Utils {
  public static getLast12MonthWithYear = async () => {
    let months = [];
    let monthsRequired = 11;

    for (let i = monthsRequired; i >= 0; i--) {
      months.push(moment().subtract(i, "months").format("MMM-YYYY"));
    }
    return months;
  };

  public static getRadomColor = async () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
}
