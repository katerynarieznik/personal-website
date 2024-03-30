import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface TechIconProps {
  icon: JSX.Element
  text: string
}

export function TechIcon({ icon, text }: TechIconProps) {
  return (
    <TooltipProvider delayDuration={0} skipDelayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary" size="icon">
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          align="center"
          className="bg-transparent p-0 text-foreground"
        >
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
