import { BackgroundGlow } from "./backgroundGlow";
import { GridBackground } from "./gridBackground";
import { DotDecoration } from "./dotDecoration";
import { HeroDecorations } from "./heroDecoration";

export const Background = () => {
    return(
        <>
            <BackgroundGlow/>
            <HeroDecorations/>
            <GridBackground />
            <DotDecoration/>
        </>
    )
}