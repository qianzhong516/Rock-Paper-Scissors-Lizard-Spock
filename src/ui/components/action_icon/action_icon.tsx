import { Icon, IconType, EmptyIcon } from '../../base/icon/Icon';

export const ScissorsIconSmall = ({
	onClick,
}: {
	onClick: (type: IconType) => void;
}) => <Icon type={IconType.SCISSORS} onClick={onClick} />;

export const PaperIconSmall = ({
	onClick,
}: {
	onClick: (type: IconType) => void;
}) => <Icon type={IconType.PAPER} onClick={onClick} />;

export const RockIconSmall = ({
	onClick,
}: {
	onClick: (type: IconType) => void;
}) => <Icon type={IconType.ROCK} onClick={onClick} />;

export const LizardIconSmall = ({
	onClick,
}: {
	onClick: (type: IconType) => void;
}) => <Icon type={IconType.LIZARD} onClick={onClick} />;

export const SpockIconSmall = ({
	onClick,
}: {
	onClick: (type: IconType) => void;
}) => <Icon type={IconType.SPOCK} onClick={onClick} />;

export const EmptyIconSmall = () => <EmptyIcon />;

export const ScissorsIconLarge = () => (
	<Icon size='large' type={IconType.SCISSORS} />
);

export const PaperIconLarge = () => <Icon size='large' type={IconType.PAPER} />;

export const RockIconLarge = () => <Icon size='large' type={IconType.ROCK} />;

export const LizardIconLarge = () => (
	<Icon size='large' type={IconType.LIZARD} />
);

export const SpockIconLarge = () => <Icon size='large' type={IconType.SPOCK} />;

export const EmptyIconLarge = () => <EmptyIcon size='large' />;
