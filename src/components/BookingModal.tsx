import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
    const calendlyUrl = localStorage.getItem('calendly_url') || 'https://calendly.com/bridgepointautomations-support/30min';

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl h-[90vh] md:h-[85vh] p-0 overflow-hidden flex flex-col bg-white">
                <DialogHeader className="px-6 py-4 border-b">
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-primary border-primary/20">
                            <Calendar className="w-3 h-3 mr-1" />
                            Free Automation Audit
                        </Badge>
                    </div>
                    <DialogTitle className="text-2xl font-bold">
                        Schedule Your <span className="text-gradient">Free Consultation</span>
                    </DialogTitle>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto">
                    <div className="p-6 grid lg:grid-cols-3 gap-8 h-full">
                        {/* Context / Value Prop (Visible on large screens) */}
                        <div className="hidden lg:block space-y-6 lg:col-span-1">
                            <div className="bg-accent/10 border border-primary/20 rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <div className="space-y-1">
                                        <p className="font-semibold text-sm">No sales pressure</p>
                                        <p className="text-xs text-muted-foreground">
                                            Just actionable insights about automation opportunities in your business.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-medium text-sm text-foreground">What we'll cover:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                                        Current workflow analysis
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5" />
                                        ROI & savings projection
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5" />
                                        Custom automation roadmap
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Calendly Embed */}
                        <div className="lg:col-span-2 h-full min-h-[500px] border rounded-lg overflow-hidden bg-background">
                            <iframe
                                src={calendlyUrl}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                title="Schedule Appointment"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BookingModal;
