'use client';

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface LikeButtonProps{
    songId: string;
}
const LikeButton: React.FC<LikeButtonProps> = ({
    songId
}) => {
    const router = useRouter();
    const { supabaseClient } = useSessionContext();

    const authModal = useAuthModal();
    const user = useUser();

    const [isLike, setIsLiked] = useState(false);


    return ( <div>Like Button</div> );
}
 
export default LikeButton;