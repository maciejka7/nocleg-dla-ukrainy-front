import { format } from "date-fns";
import { pl } from "date-fns/locale";

export const formatDate = (data: Date) => {

    const date = new Date(data);

    return format(
        date,
        "do LLLL yyyy",
        { locale: pl }
      )
}
