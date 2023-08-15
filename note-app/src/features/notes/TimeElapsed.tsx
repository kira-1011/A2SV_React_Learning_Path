import { formatDistanceToNow, parseISO } from "date-fns";

export const TimeElapsed = ({date}: {date: string}) => {
  return (
    <div className="italic">
        {/*  display elapsed time starting the time it's posted */}
        <span>{formatDistanceToNow(parseISO(date))} ago</span>
    </div>
  )
}